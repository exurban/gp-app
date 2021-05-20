// import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import NextAuth, { User } from 'next-auth';
import Providers from 'next-auth/providers';
import nodemailer from 'nodemailer';
import { html, text } from './verificationRequest';
import { GraphQLClient } from 'graphql-request';
import {
  GetApiTokenDocument,
  GetApiTokenInput,
} from '../../../graphql-operations';

/**
 * getApiToken
 * Use nest-auth login info to get an API token from the Apollo Server API.
 */
const getApiToken = async (args: GetApiTokenInput) => {
  console.log(`Requesting API token with ${JSON.stringify(args, null, 2)}`);
  const api = `https://api.gibbs-photography.com`;

  const graphQLClient = new GraphQLClient(api);

  const input = {
    input: {
      ...args,
    },
  };
  console.log(`Sending request with input: ${JSON.stringify(input, null, 2)}`);
  console.log(`Requesting API Token from server at ${api}`);

  const token = await graphQLClient.request(GetApiTokenDocument, input);

  return token.getApiToken;
};

interface GPUser extends User {
  id: number;
  accessToken?: string;
}

export default NextAuth({
  providers: [
    Providers.Apple({
      clientId: process.env.APPLE_ID,
      clientSecret: {
        appleId: process.env.APPLE_ID as string,
        teamId: process.env.APPLE_TEAM_ID as string,
        privateKey: process.env.APPLE_PRIVATE_KEY as string,
        keyId: process.env.APPLE_KEY_ID as string,
      },
    }),

    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.Email({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: ({ identifier: email, url, provider }) => {
        return new Promise((resolve, reject) => {
          const { server, from } = provider;
          // Strip protocol from URL and use domain as site name
          const site = `Gibbs Photography`;
          console.log(`sending email verification request`);

          nodemailer.createTransport(server).sendMail(
            {
              to: email,
              from,
              subject: `Sign in to ${site}`,
              text: text({ url, site }),
              html: html({ url, email }),
            },
            (error) => {
              if (error) {
                return reject(
                  new Error(
                    `SEND_VERIFICATION_EMAIL_ERROR ${JSON.stringify(
                      error,
                      null,
                      2
                    )}`
                  )
                );
              }
              return resolve();
            }
          );
        });
      },
    }),
  ],
  // * remote DB config
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: false,
    ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },

  // * Local DB Config
  // database: {
  //   type: 'postgres',
  //   host: 'localhost',
  //   port: 5432,
  //   username: 'postgres',
  //   password: 'postgres',
  //   database: 'photos',
  //   synchronize: true,
  // },

  session: {
    jwt: true,
  },
  jwt: {
    encryption: false,
    secret: process.env.NEXTAUTH_SECRET,
    signingKey: process.env.JWT_SIGNING_KEY,
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
  },

  callbacks: {
    // async signIn(user, account, profile) {
    //   console.log(`signin callback`);
    //   console.log(`user: ${JSON.stringify(user, null, 2)}`);
    //   console.log(`account: ${JSON.stringify(account, null, 2)}`);
    //   console.log(`profile: ${JSON.stringify(profile, null, 2)}`);
    //   return true;
    // },
    // async redirect(url, baseUrl) {
    //   console.log(`redirect callback`);
    //   console.log(`url: ${JSON.stringify(url, null, 2)}`);
    //   console.log(`base url: ${JSON.stringify(baseUrl, null, 2)}`);
    //   return baseUrl;
    // },
    jwt: async (token, user: GPUser) => {
      // console.log(`jwt callback with secret ${process.env.JWT_SECRET}`);
      // console.log(`user: ${JSON.stringify(user, null, 2)}`);
      // console.log(`token: ${JSON.stringify(token, null, 2)}`);
      // if (account?.accessToken) {
      //   token.accessToken = account.accessToken;
      // }
      if (user && user !== undefined) {
        const signinArgs = {
          userId: user.id,
          email: user.email as string,
        };

        const apiToken = await getApiToken(signinArgs);

        token = { ...token, accessToken: apiToken };
      }
      return token;
    },
    session: async (session, user: GPUser) => {
      session.accessToken = user.accessToken;

      return Promise.resolve(session);
    },
  },

  // events: {
  //   async signIn(message) {
  //     console.log(`sign in message: ${JSON.stringify(message, null, 2)}`);
  //   },
  //   async signOut(message: any) {
  //     /* on signout */
  //     console.log(`sign signOut message: ${JSON.stringify(message, null, 2)}`);
  //   },
  //   async createUser(message) {
  //     /* user created */
  //     console.log(`create user message: ${JSON.stringify(message, null, 2)}`);
  //   },
  //   async linkAccount(message) {
  //     /* account linked to a user */
  //     console.log(
  //       `LINKED ACCOUNT message: ${JSON.stringify(message, null, 2)}`
  //     );
  //   },
  //   async session(message) {
  //     /* session is active */
  //     console.log(`session message: ${JSON.stringify(message, null, 2)}`);
  //   },
  //   async error(message) {
  //     /* error in authentication flow */
  //     console.log(`ERROR!!! message: ${JSON.stringify(message, null, 2)}`);
  //   },
  // },

  debug: true,
});

// const authHandler: NextApiHandler = (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) => NextAuth(req, res, options);
// export default authHandler;

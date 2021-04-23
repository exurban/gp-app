import { NextApiRequest, NextApiResponse, NextApiHandler } from 'next';
import NextAuth, { NextAuthOptions, User } from 'next-auth';
import Providers from 'next-auth/providers';
import { GraphQLClient } from 'graphql-request';
import {
  GetApiTokenDocument,
  GetApiTokenInput,
} from '../../../graphql-operations';

const getApiToken = async (args: GetApiTokenInput) => {
  console.log(`Requesting API token with ${JSON.stringify(args, null, 2)}`);
  const api = process.env.API_URI as string;
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

const options: NextAuthOptions = {
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
    }),
  ],
  // * remote DB config
  database: {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
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
    signIn: '/auth/sign-in',
    signOut: '/auth/sign-out',
    error: '/auth/error',
    verifyRequest: '/auth/verify-email',
  },

  callbacks: {
    async signIn(user, account, profile) {
      console.log(`signin callback`);
      console.log(`user: ${JSON.stringify(user, null, 2)}`);
      console.log(`account: ${JSON.stringify(account, null, 2)}`);
      console.log(`profile: ${JSON.stringify(profile, null, 2)}`);
      return true;
    },
    async redirect(url, baseUrl) {
      console.log(`redirect callback`);
      console.log(`url: ${JSON.stringify(url, null, 2)}`);
      console.log(`base url: ${JSON.stringify(baseUrl, null, 2)}`);
      return baseUrl;
    },
    jwt: async (token, user: GPUser) => {
      console.log(`jwt callback with secret ${process.env.JWT_SECRET}`);
      console.log(`user: ${JSON.stringify(user, null, 2)}`);
      console.log(`token: ${JSON.stringify(token, null, 2)}`);
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
      console.log(`session callback`);
      session.accessToken = user.accessToken;

      return Promise.resolve(session);
    },
  },

  events: {
    async signIn(message) {
      console.log(`sign in message: ${JSON.stringify(message, null, 2)}`);
    },
    async signOut(message) {
      /* on signout */
      console.log(`sign signOut message: ${JSON.stringify(message, null, 2)}`);
    },
    async createUser(message) {
      /* user created */
      console.log(`create user message: ${JSON.stringify(message, null, 2)}`);
    },
    async linkAccount(message) {
      /* account linked to a user */
      console.log(
        `LINKED ACCOUNT message: ${JSON.stringify(message, null, 2)}`
      );
    },
    async session(message) {
      /* session is active */
      console.log(`session message: ${JSON.stringify(message, null, 2)}`);
    },
    async error(message) {
      /* error in authentication flow */
      console.log(`ERROR!!! message: ${JSON.stringify(message, null, 2)}`);
    },
  },

  debug: true,
};

const authHandler: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => NextAuth(req, res, options);
export default authHandler;

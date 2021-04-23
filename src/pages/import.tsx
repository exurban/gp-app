import { FlatfileButton } from '@flatfile/react';

const ImportPage: React.FC = () => {
  return (
    <>
      <div>
        <h1>FLAT FILE IMPORTER</h1>
        <FlatfileButton
          licenseKey="ad0a19b7-b25b-4624-9d5e-35a659c45d86"
          customer={{ userId: '12345' }}
          settings={{
            type: 'Frame',
            fields: [
              { label: 'id', key: 'id' },
              { label: 'name', key: 'name' },
              { label: 'display_name', key: 'display_name' },
              { label: 'description', key: 'description' },
              { label: 'sort_index', key: 'sort_index' },
              { label: 'cover_image_id', key: 'cover_image_id' },
              { label: 'material', key: 'material' },
              { label: 'color', key: 'color' },
              { label: 'print_type', key: 'print_type' },
              { label: 'frame_sku', key: 'frame_sku' },
              { label: 'aspect_ratio', key: 'aspect_ratio' },
              { label: 'dimension1', key: 'dimension1' },
              { label: 'dimension2', key: 'dimension2' },
              { label: 'cost', key: 'cost' },
              { label: 'base_price', key: 'base_price' },
              { label: 'price_modifier', key: 'price_modifier' },
            ],
            managed: true,
          }}
          onData={async (results) => {
            // do something with the results
            console.log(`imported: ${JSON.stringify(results, null, 2)}`);
            return 'Done!';
          }}
        >
          Import Contacts
        </FlatfileButton>
      </div>
    </>
  );
};

export default ImportPage;

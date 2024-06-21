export const dataTypesOBJ = [
  {
    type: 'list',
    body: {
      text: 'TITULO LISTA',
    },
    footer: {
      text: 'TEXTO DE CHAMADA',
    },
    action: {
      button: 'TITULO BOTÃO',
      sections: [
        {
          title: 'TITULO DA SEÇÃO',
          rows: [
            {
              id: 'INDEX_FLOW',
              title: 'NOME DA OPÇÃO 1',
              description: 'DESCRIÇÃO DA OPÇÃO 1',
            },
            {
              id: 'INDEX_FLOW',
              title: 'NOME DA OPÇÃO 2',
              description: 'DESCRIÇÃO DA OPÇÃO 2',
            },
          ],
        },
      ],
    },
  },
  {
    type: 'button',
    body: {
      text: 'TEXTO',
    },
    action: {
      buttons: [
        {
          type: 'reply',
          reply: {
            id: 'INDEX_FLOW',
            title: 'TITULO BOTÃO',
          },
        },
        {
          type: 'reply',
          reply: {
            id: 'INDEX_FLOW',
            title: 'TITULO BOTÃO',
          },
        },
      ],
    },
  },
  {
    type: 'text',
    body: {
      preview_url: true,
      body: 'textResponse',
    },
  },
  {
    type: 'image',
    body: {
      link: 'LINK_DESTINO_FOTO_S3',
    },
  },
  {
    type: 'document',
    body: {
      link: 'LINK_DESTINO_DOCUMENT_S3',
    },
  },
  {
    type: 'location',
    body: {
      latitude: '-12.067158831865067',
      longitude: '-77.03377940839486',
      name: 'Estadio Nacional del Perú',
      address: 'C. José Díaz s/n, Cercado de Lima 15046',
    },
  },
];

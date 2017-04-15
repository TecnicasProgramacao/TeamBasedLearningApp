export default function () {
  return [
    {
      enable: true,
      questions: [
        {
          description: 'De acordo com o modelo de requisitos do SAFe, um item de backlog pode ser, EXCETO:',
          alternatives: [
            {
              alternativeDescription: 'Épico',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Capacidade(Capability)',
              alternativePoints: 4,
              alternative: true,
            },
            {
              alternativeDescription: 'Requisitos Não funcionais',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Feature',
              alternativePoints: 0,
              alternative: false,
            },
          ],
        },
        {
          description: 'Sobre o nível de Portifólio, é INCORRETO afirmar:',
          alternatives: [
            {
              alternativeDescription: 'Os épicos do portifolio são elementos que permitem entender como os ARTs são gerenciados no SAFe.',
              alternativePoints: 4,
              alternative: true,
            },
            {
              alternativeDescription: 'Os épicos representam grandes iniciativas da organização.',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Cada épico requer análise de custo, impacto e oportunidade.',
              alternativePoints: 0,
              alternative: false,
            },
            {
              alternativeDescription: 'Os épicos são aprovados antes de serem implementados.',
              alternativePoints: 0,
              alternative: false,
            },
          ],
        },
      ],
    },
  ];
}

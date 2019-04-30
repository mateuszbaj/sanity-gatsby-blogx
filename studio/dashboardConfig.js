export default {
  widgets: [
    {name: 'sanity-tutorials'},
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              sites: [
                {
                  buildHookId: '5cc7f993464bf51f381c0491',
                  name: 'Content Studio',
                  siteId: '594d0de8-ef1c-42ff-8723-89ed7661f7ec'
                },
                {
                  buildHookId: '5cc7f993ca001a641f2c0c57',
                  name: 'Blog Website',
                  siteId: 'a507120e-09c4-4139-a761-e19334ca7a09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mateuszbaj/sanity-gatsby-blogx',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https:&#x2F;&#x2F;sanity-gatsby-blogx.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

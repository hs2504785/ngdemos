/** Example file/folder data. */
export const files = [
  {
    id: 'componentsID',
    name: 'components',
    type: 'folder',
    children: [
      {
        name: 'src',
        type: 'folder',
        children: [
          {
            name: 'cdk',
            type: 'folder',
            children: [
              { name: 'package.json', type: 'file' },
              { name: 'BUILD.bazel', type: 'file' },
            ],
          },
          { name: 'material', type: 'folder' },
        ],
      },
    ],
  },
  {
    id: 'angularID',
    name: 'angular',
    type: 'folder',
    children: [
      {
        name: 'packages',
        type: 'folder',
        children: [
          { name: '.travis.yml', type: 'file' },
          { name: 'firebase.json', type: 'file' },
          { name: 'firebase1.json', type: 'file', work: 'None' },
          { name: 'firebase2.json', type: 'file' },
        ],
      },
      { name: 'package.json', type: 'file' },
    ],
  },
  {
    id: 'angularjsID',
    name: 'angularjs',
    type: 'folder',
    children: [
      { name: 'gulpfile.js', type: 'file' },
      { name: 'README.md', type: 'file' },
    ],
  },
];

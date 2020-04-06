module.exports = {
  name: 'store-ui-formatters',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/ui-formatters',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

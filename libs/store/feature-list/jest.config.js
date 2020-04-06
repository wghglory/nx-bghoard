module.exports = {
  name: 'store-feature-list',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/feature-list',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

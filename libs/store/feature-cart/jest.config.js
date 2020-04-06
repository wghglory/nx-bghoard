module.exports = {
  name: 'store-feature-cart',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/feature-cart',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  name: 'store-data-access-cart',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/store/data-access-cart',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

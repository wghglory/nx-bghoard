module.exports = {
  name: 'angular-publish',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/angular-publish',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};

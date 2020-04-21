import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

// nx g workspace-schematic cowsay
/*
Let's use schematics to update our package.json file. We'll add a devDependency, install that dependency and add a script to the package.json file.

We'll call our schematic cowsay. It has no properties.

We'll import some Rules from the @nrwl/workspace package: addDepsToPackageJson and updateJsonInTree. addDepsToPackageJson takes a list of dependencies, devDependencies and a boolean that says whether it should run the install task after dependencies have been updated.

Let's define these variables. We don't need to define any dependencies, but we do want to install a devDependency of cowsay. And here we can specify what version of cowsay we want or put an asterisk which means install the default version. And we want to run the install task after updating dependencies.

Now let's add the package.json script. updateJsonInTree takes the path to the json file you want to update (in our case package.json) and then a callback which takes as input the json itself and needs to return a modified json value. We'll set json.scripts.cowsay to the cowsay string and return that modified json.

Now let's run the schematic. It updated the package.json and installed new dependencies. Here we have cowsay added to our devDependencies and a new cowsay package.json script.

Now we can run `yarn cowsay moo!`
*/

import { addDepsToPackageJson, updateJsonInTree } from '@nrwl/workspace';

export default function(schema: any): Rule {
  const dependencies = {};
  const devDependencies = {
    cowsay: '*'
  };
  const shouldRunInstallTask = true;

  return chain([
    addDepsToPackageJson(dependencies, devDependencies, shouldRunInstallTask),
    updateJsonInTree('package.json', json => {
      json.scripts.cowsay = 'cowsay'; // json scripts : { cowsay: "cowsay" }
      return json;
    })
  ]);
}

import {
  chain,
  Rule,
  SchematicContext,
  Tree,
  mergeWith,
  apply,
  url,
  move
} from '@angular-devkit/schematics';
import { getProjectConfig } from '@nrwl/workspace';

/* Schematics is a project written by the Angular team, but there's nothing specific to Angular about it. It's a generic tool for updating a codebase. A schematic is a function that takes as input the parameters passed in by the developer and outputs a Rule for updating your codebase. Now a Rule is itself only a function that takes a Tree, which represents the current state of your file system, and a context object, which contains some metadata and helpful tools. That function needs to return either another Rule, a new Tree or an Observable or a Promise of a Rule or a Tree. context contains a helpful logger object where you can emit logging statements to the console. In our case we'll return a chain rule, which simply combines multiple Rules together in a sequence. We'll pass the tree and context down into the chain rule. Then paste in a new Rule.
 */

/* Let me explain each of the parts of this Rule as we go through it. getProjectConfig is a helper function from @nrwl/workspace that looks at the existing Tree and based on a project name that is passed in, will find the definition of that project in your workspace.json. So you'll have access to everything that's listed in here. We want to get the root property to know where the library is located. So here we have the root property, and we're using that to take these static files and move them to the location of the library specified. apply takes the files and performs these actions on them. Then mergeWith takes the existing Tree and merges the new files at the specified location into that Tree. */

export default function(schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.debug('adding LICENSE.txt to library');

    return chain([
      mergeWith(
        apply(url('./files'), [move(getProjectConfig(tree, schema.name).root)])
      )
    ])(tree, context);
  };
}

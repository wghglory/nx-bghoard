import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';
import { SchematicOptions } from './schema';

/*
We've set up some useful tags to encourage a particular way of architecting our libraries. But how do we make sure that developers actually put tags on their libraries? We could send out a strongly worded e-mail or add some steps to the README.md file, but let's face it - nobody actually reads the README.

Let's create a schematic to help developers choose the appropriate tags for their new library.

We'll call it tagged-library. We'll add an input in the schema.json for each type of tag. The type is of type string. It has an enum to list the possible values. We'll set the default value to feature and give it a prompt. scope will also be of type string, but we'll remove the enum and default scope is shared. Lastly, we'll add platform.

Now let's make a typescript interface for these inputs.

Now we'll update the actual typescript code.

This pre-generated schematic calls the externalSchematic function, which simply invokes the @nrwl/workspace collection library schematic with these parameters. We'll use our SchematicOptions type and specify the tags that the library should use.

Let's write a function that will generate the correct tag string from the schema input. It outputs the type tag, the scope tag, and the platform tag based on the inputs. And we'll call that here.

And let's see how that works. We'll call it test-library. Now we can pick what type of library it is, what scope it belongs to, and what platform it should run on. And you can see that the tags have been added correctly.

The externalSchematic function is very useful for making codebase specific workflows repeatable and mistake free. Instead of listing a seven step process in a README somewhere, simply make a schematic for it where developers walk through the steps that they need to take. You can specify any collection and any schematic within that collection while making the options as flexible or restrictive as you need.
*/

function getTags(schema: SchematicOptions): string {
  return `type:${schema.type},scope:${schema.scope},platform:${schema.platform}`;
}

export default function(schema: SchematicOptions): Rule {
  return chain([
    externalSchematic('@nrwl/workspace', 'lib', {
      name: schema.name,
      tags: getTags(schema)
    })
  ]);
}

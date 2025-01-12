import type {Rule, SchematicContext, Tree} from '@angular-devkit/schematics';
import {chain} from '@angular-devkit/schematics';
import {getPackageJsonDependency, saveActiveProject} from 'ng-morph';

import type {TuiSchema} from '../../../ng-add/schema';
import {
    FINISH_SYMBOL,
    infoLog,
    REPLACE_SYMBOL,
    SMALL_TAB_SYMBOL,
    titleLog,
} from '../../../utils/colored-log';
import {getFileSystem} from '../../utils/get-file-system';
import {renameIcons} from './rename-icons';

export function migrateIcons(options: TuiSchema): Rule {
    return chain([
        (tree: Tree, _: SchematicContext) => {
            if (hasProprietaryIcons(tree)) {
                // TODO: add proprietary-icons migration

                return;
            }

            const fileSystem = getFileSystem(tree);

            !options['skip-logs'] &&
                infoLog(`${SMALL_TAB_SYMBOL}${REPLACE_SYMBOL} replacing strings...`);
            renameIcons();

            fileSystem.commitEdits();
            saveActiveProject();

            !options['skip-logs'] &&
                titleLog(`${FINISH_SYMBOL} Icons successfully migrated \n`);
        },
    ]);
}

function hasProprietaryIcons(tree: Tree): boolean {
    return !!getPackageJsonDependency(tree, '@taiga-ui/proprietary-icons');
}

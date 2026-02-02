import fs from 'fs';

import { datasets } from '~/data/datasets';
import { CUSTOM_MOD } from '~/data/game';
import { ModData } from '~/data/schema/mod-data';

import { getJsonData } from './utils/file';
import { logTime } from './utils/log';

// Load mods from arguments
const mods = datasets.mods.map((m) => m.id).filter((id) => id !== CUSTOM_MOD);

/** Run all scripts required to update an array of Factorio mod sets */
function updateMods(mods: string[]): void {
  for (let i = 0; i < mods.length; i++) {
    const mod = mods[i];
    const modPath = `./public/data/${mod}`;
    const modDataPath = `${modPath}/data.json`;
    const modData = getJsonData(modDataPath) as ModData;

    // Last migration: Convert icon positions to x/y, remove color
    modData.icons.forEach((i) => {
      const old = i as unknown as {
        position?: string;
        color?: string;
        x: number;
        y: number;
      };
      const position: string = old.position ?? '';
      delete old.color;
      delete old.position;

      const coords = /-?(\d+)px -?(\d+)px/.exec(position);
      old.x = Number(coords?.[1]);
      old.y = Number(coords?.[2]);
    });

    fs.writeFileSync(modDataPath, JSON.stringify(modData));

    logTime(
      `Updated mod '${mod}' (${(i + 1).toString()} of ${mods.length.toString()})`,
    );
  }
}

logTime(
  `Starting update for ${mods.length.toString()} mod${mods.length > 1 ? 's' : ''}...`,
);

updateMods(mods);

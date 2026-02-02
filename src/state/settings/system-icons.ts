import {
  IconData,
  IconJson,
  parseIcon,
  parseIconData,
} from '~/data/schema/icon-data';
import { toRecord } from '~/utils/record';

export const systemIcons: IconJson[] = [
  { id: 'transparent', x: 66, y: 0 },
  { id: 'module', x: 132, y: 0 },
  { id: 'pipe', x: 198, y: 0 },
  { id: 'q-1', x: 264, y: 0 },
  { id: 'q0', x: 0, y: 66 },
  { id: 'q1', x: 66, y: 66 },
  { id: 'q2', x: 132, y: 66 },
  { id: 'q3', x: 198, y: 66 },
  { id: 'q5', x: 264, y: 66 },
  { id: 'captain-of-industry', x: 0, y: 132 },
  { id: 'dyson-sphere-program', x: 66, y: 132 },
  { id: 'factor-y', x: 132, y: 132 },
  { id: 'factorio', x: 198, y: 132 },
  { id: 'final-factory', x: 264, y: 132 },
  { id: 'foundry', x: 0, y: 198 },
  { id: 'mindustry', x: 66, y: 198 },
  { id: 'outworld-station', x: 132, y: 198 },
  { id: 'satisfactory', x: 198, y: 198 },
  { id: 'techtonica', x: 264, y: 198 },
  { id: 'skyformer', x: 0, y: 264 },
  { id: 'custom', x: 66, y: 264 },
  { id: 'rocket-pod', x: 132, y: 264 },
];

export const systemIconsRecord = toRecord(
  systemIcons.map(
    (i): IconData => parseIconData(parseIcon(i), 'icons/icons.webp'),
  ),
);

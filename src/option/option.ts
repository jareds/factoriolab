import { IconDefinition } from '@fortawesome/angular-fontawesome';

import { TooltipType } from '~/components/tooltip/tooltip-type';
import { IconType } from '~/data/icon-type';

export interface Option<T = string> {
  label: string;
  value: T;
  icon?: string | IconDefinition;
  iconType?: IconType;
  iconClass?: string;
  tooltip?: string;
  tooltipType?: TooltipType;
  disabled?: boolean;
}

export interface OptionParams {
  iconType?: IconType;
  tooltipType?: TooltipType;
  include?: Set<string>;
  exclude?: Set<string>;
  emptyModule?: boolean;
  empty?: boolean;
}

export function getIdOptions(
  ids: string[],
  record: Record<string, { name: string; icon?: string }>,
  params?: OptionParams,
): Option[] {
  const { iconType, tooltipType, include, exclude, emptyModule, empty } = {
    ...params,
  };

  if (include) ids = ids.filter((i) => include.has(i));
  if (exclude) ids = ids.filter((i) => !exclude.has(i));

  const list = ids.map((i): Option => {
    const opt: Option = { label: record[i].name, value: i };
    if (iconType) {
      opt.icon = i;
      opt.iconType = iconType;
    }

    if (tooltipType) {
      opt.tooltip = i;
      opt.tooltipType = tooltipType;
    }

    return opt;
  });

  if (emptyModule)
    list.unshift({
      label: 'none',
      value: '',
      icon: 'module',
    });

  if (empty)
    list.unshift({
      label: 'none',
      value: '',
      icon: record[ids[0]]?.icon ?? ids[0],
      iconClass: 'opacity-40 grayscale',
    });

  return list;
}

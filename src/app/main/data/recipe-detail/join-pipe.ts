import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'join' })
export class JoinPipe implements PipeTransform {
  transform(
    value: string[] | Set<string> | null | undefined,
    separator = ', ',
  ): string {
    if (value == null) return '';
    return Array.from(value).join(separator);
  }
}

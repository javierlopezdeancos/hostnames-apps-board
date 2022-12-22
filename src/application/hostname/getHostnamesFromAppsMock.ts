import AppType from '../../domain/app/AppType';
import HostnameType from '../../domain/hostname/HostnameType';

export default function getHostnamesFromAppsMock(
  apps: AppType[]
): HostnameType[] {
  if (apps.length === 0) {
    return [];
  }

  if (apps.length === 1) {
    return [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
    ];
  }

  if (apps.length === 2) {
    return [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
      'e0419f48-6a5a.craig.info',
    ];
  }

  if (apps.length === 3) {
    return [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
      'e0419f48-6a5a.craig.info',
      'b0b655c5-928a.nadia.biz',
      '95b346a0-17f4.abbigail.name',
    ];
  }

  if (apps.length === 4) {
    return [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
      'e0419f48-6a5a.craig.info',
      'b0b655c5-928a.nadia.biz',
      '95b346a0-17f4.abbigail.name',
      '128406fc-0d3f.tiana.biz',
    ];
  }

  if (apps.length >= 5 && apps.length <= 8) {
    return [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
      'e0419f48-6a5a.craig.info',
      'b0b655c5-928a.nadia.biz',
      '95b346a0-17f4.abbigail.name',
      '128406fc-0d3f.tiana.biz',
      '2b4cfcf7-81d5.kelli.org',
    ];
  }

  if (apps.length === 9) {
    return [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
      'e0419f48-6a5a.craig.info',
      'b0b655c5-928a.nadia.biz',
      '95b346a0-17f4.abbigail.name',
      '128406fc-0d3f.tiana.biz',
      '2b4cfcf7-81d5.kelli.org',
      '92116865-5462.conor.com',
    ];
  }

  if (apps.length >= 10) {
    return [
      '7e6272f7-098e.dakota.biz',
      '9a450527-cdd9.kareem.info',
      'e7bf58af-f0be.dallas.biz',
      'e0419f48-6a5a.craig.info',
      'b0b655c5-928a.nadia.biz',
      '95b346a0-17f4.abbigail.name',
      '128406fc-0d3f.tiana.biz',
      '2b4cfcf7-81d5.kelli.org',
      '92116865-5462.conor.com',
      '1d717554-bf17.sydnie.name',
    ];
  }
}

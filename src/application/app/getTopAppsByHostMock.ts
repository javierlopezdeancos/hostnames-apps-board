import AppType from '../../domain/app/AppType';
import HostnameType from '../../domain/hostname/HostnameType';

export default function getTopAppsByHostMock(
  hostname: HostnameType,
  rangeMaxLimit: number,
  apps: AppType[]
): AppType[] {
  if (hostname === '7e6272f7-098e.dakota.biz') {
    return [
      {
        name: 'Incredible Cotton Soap - Orn Group, Inc',
        contributors: ['Westley Johnson'],
        version: 6,
        apdex: 93,
        host: ['7e6272f7-098e.dakota.biz', 'e0419f48-6a5a.craig.info'],
      },
      {
        name: 'Small Frozen Computer - Glover - Rippin, and Sons',
        contributors: [
          'Mekhi Mayer',
          'Alexane Hermiston',
          'Dr. Brielle Jacobson',
        ],
        version: 6,
        apdex: 75,
        host: [
          '7e6272f7-098e.dakota.biz',
          '1d717554-bf17.sydnie.name',
          '9a450527-cdd9.kareem.info',
          '2b4cfcf7-81d5.kelli.org',
          '128406fc-0d3f.tiana.biz',
        ],
      },
      {
        name: "Practical Rubber Fish - Collins - O'Conner, Group",
        contributors: ['Effie Strosin DDS', 'Wilhelmine Feeney'],
        version: 7,
        apdex: 70,
        host: ['7e6272f7-098e.dakota.biz', '128406fc-0d3f.tiana.biz'],
      },
      {
        name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
        contributors: [
          'Edwin Reinger',
          'Ofelia Dickens',
          'Hilbert Cole',
          'Helen Kuphal',
          'Maurine McDermott Sr.',
        ],
        version: 7,
        apdex: 68,
        host: [
          '7e6272f7-098e.dakota.biz',
          '9a450527-cdd9.kareem.info',
          'e7bf58af-f0be.dallas.biz',
        ],
      },
      {
        name: 'Unbranded Fresh Car - Schmidt, Gerhold and Roberts, and Sons',
        contributors: [
          'Stanford Abshire',
          'Jordon Hegmann',
          'Tad Herman PhD',
          'Monserrate Schuppe',
        ],
        version: 5,
        apdex: 68,
        host: [
          '92116865-5462.conor.com',
          '95b346a0-17f4.abbigail.name',
          '1d717554-bf17.sydnie.name',
          'e0419f48-6a5a.craig.info',
          '7e6272f7-098e.dakota.biz',
          'b0b655c5-928a.nadia.biz',
        ],
      },
      {
        name: 'Practical Metal Hat - Gulgowski, Raynor and Goodwin, Inc',
        contributors: ['Alejandra Schumm'],
        version: 10,
        apdex: 62,
        host: [
          '9a450527-cdd9.kareem.info',
          '1d717554-bf17.sydnie.name',
          'e7bf58af-f0be.dallas.biz',
          '7e6272f7-098e.dakota.biz',
        ],
      },
      {
        name: 'Rustic Metal Computer - Leffler and Sons, and Sons',
        contributors: [
          'Edison Haley',
          'Jocelyn Schinner',
          'Elda Mohr',
          'Randy Jakubowski',
          'Aniyah Koss',
        ],
        version: 6,
        apdex: 62,
        host: [
          '128406fc-0d3f.tiana.biz',
          '95b346a0-17f4.abbigail.name',
          '7e6272f7-098e.dakota.biz',
        ],
      },
      {
        name: 'Awesome Rubber Pants - Wehner, McLaughlin and Runolfsdottir, and Sons',
        contributors: ['Wilbert Crooks', 'Terrell Durgan', 'Evan Mann MD'],
        version: 4,
        apdex: 62,
        host: [
          'e0419f48-6a5a.craig.info',
          '2b4cfcf7-81d5.kelli.org',
          '128406fc-0d3f.tiana.biz',
          '7e6272f7-098e.dakota.biz',
        ],
      },
      {
        name: 'Tasty Plastic Computer - Cummerata - Moen, Group',
        contributors: ['Alice Jacobs', 'Dr. Gaetano Weimann'],
        version: 4,
        apdex: 61,
        host: [
          '92116865-5462.conor.com',
          '95b346a0-17f4.abbigail.name',
          '7e6272f7-098e.dakota.biz',
        ],
      },
      {
        name: 'Gorgeous Plastic Salad - Kovacek, Kautzer and Ratke, and Sons',
        contributors: ['Palma Rath'],
        version: 6,
        apdex: 61,
        host: [
          '7e6272f7-098e.dakota.biz',
          '128406fc-0d3f.tiana.biz',
          '95b346a0-17f4.abbigail.name',
          '1d717554-bf17.sydnie.name',
        ],
      },
      {
        name: 'Awesome Cotton Pants - McGlynn, Heidenreich and Bernier, Group',
        contributors: ['Marcelle Tremblay', 'Francesco Von', 'Marcelino Jerde'],
        version: 10,
        apdex: 61,
        host: ['128406fc-0d3f.tiana.biz', '7e6272f7-098e.dakota.biz'],
      },
      {
        name: 'Intelligent Rubber Car - Marvin and Sons, Inc',
        contributors: ['Geovany Fay DDS'],
        version: 6,
        apdex: 60,
        host: [
          '128406fc-0d3f.tiana.biz',
          '7e6272f7-098e.dakota.biz',
          '92116865-5462.conor.com',
          '1d717554-bf17.sydnie.name',
        ],
      },
      {
        name: 'Unbranded Rubber Sausages - Bosco LLC, and Sons',
        contributors: ['Devon Collins'],
        version: 6,
        apdex: 60,
        host: [
          '2b4cfcf7-81d5.kelli.org',
          '9a450527-cdd9.kareem.info',
          '7e6272f7-098e.dakota.biz',
          'e0419f48-6a5a.craig.info',
        ],
      },
      {
        name: 'Sleek Rubber Mouse - McLaughlin - Monahan, and Sons',
        contributors: [
          'Maeve Romaguera',
          'Catalina Luettgen',
          'Milton Hagenes',
          'Mrs. Demetrius Lockman',
          'Esteban Cronin',
        ],
        version: 6,
        apdex: 59,
        host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
      },
      {
        name: 'Sleek Metal Soap - Kuhlman Inc, LLC',
        contributors: ['Alba Schulist', 'Elmo Sporer Sr.'],
        version: 2,
        apdex: 59,
        host: [
          '7e6272f7-098e.dakota.biz',
          '92116865-5462.conor.com',
          '2b4cfcf7-81d5.kelli.org',
          '9a450527-cdd9.kareem.info',
          '1d717554-bf17.sydnie.name',
        ],
      },
      {
        name: 'Refined Wooden Soap - Jacobi, Bradtke and Gleichner, Inc',
        contributors: [
          'Okey Boyer',
          'Elwin Boyle',
          'Timmy Yundt',
          'Robbie Ortiz',
        ],
        version: 6,
        apdex: 59,
        host: ['7e6272f7-098e.dakota.biz', '9a450527-cdd9.kareem.info'],
      },
      {
        name: 'Refined Rubber Chicken - Gleichner, Dickinson and Simonis, LLC',
        contributors: ['Mrs. Vaughn Beahan', 'Pietro Quigley'],
        version: 3,
        apdex: 58,
        host: [
          '128406fc-0d3f.tiana.biz',
          '7e6272f7-098e.dakota.biz',
          '1d717554-bf17.sydnie.name',
        ],
      },
      {
        name: 'Licensed Concrete Chair - Batz, Bergnaum and Herzog, and Sons',
        contributors: ['Virgil Feil', 'Adolphus Lockman'],
        version: 3,
        apdex: 58,
        host: ['7e6272f7-098e.dakota.biz', 'b0b655c5-928a.nadia.biz'],
      },
      {
        name: 'Rustic Rubber Towels - Orn LLC, Inc',
        contributors: ['Keely Rohan'],
        version: 4,
        apdex: 58,
        host: [
          '92116865-5462.conor.com',
          '1d717554-bf17.sydnie.name',
          '9a450527-cdd9.kareem.info',
          'e0419f48-6a5a.craig.info',
          '7e6272f7-098e.dakota.biz',
          '2b4cfcf7-81d5.kelli.org',
        ],
      },
      {
        name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
        contributors: [
          'Ramon Harris DDS',
          'Summer Dicki',
          'Triston Sipes',
          'Fae Lind',
          'Carole Emard',
        ],
        version: 6,
        apdex: 57,
        host: ['e0419f48-6a5a.craig.info', '7e6272f7-098e.dakota.biz'],
      },
      {
        name: 'Handcrafted Metal Tuna - Rohan - Sipes, and Sons',
        contributors: ['Kody Douglas'],
        version: 5,
        apdex: 56,
        host: [
          '95b346a0-17f4.abbigail.name',
          '7e6272f7-098e.dakota.biz',
          '92116865-5462.conor.com',
          'b0b655c5-928a.nadia.biz',
        ],
      },
      {
        name: 'Small Concrete Chicken - Runte - Roberts, LLC',
        contributors: [
          'Ms. Reece Block',
          'Dante Kovacek',
          'Nakia Dach',
          'Leonie Medhurst',
          'Allen Ledner',
        ],
        version: 8,
        apdex: 55,
        host: ['b0b655c5-928a.nadia.biz', '7e6272f7-098e.dakota.biz'],
      },
      {
        name: 'Ergonomic Cotton Ball - Hirthe, Bashirian and Wisozk, Group',
        contributors: [
          'Dr. Dortha Swift',
          'Aracely Bayer',
          'Freida Daugherty MD',
          'Abagail Veum',
          'Mr. Chyna Rempel',
        ],
        version: 7,
        apdex: 55,
        host: [
          'e0419f48-6a5a.craig.info',
          '7e6272f7-098e.dakota.biz',
          '9a450527-cdd9.kareem.info',
        ],
      },
      {
        name: 'Small Fresh Sausages - Wintheiser LLC, Inc',
        contributors: ['Bridie Zboncak', 'Guillermo McLaughlin', 'Josh Ryan'],
        version: 9,
        apdex: 55,
        host: [
          'e0419f48-6a5a.craig.info',
          '7e6272f7-098e.dakota.biz',
          'e7bf58af-f0be.dallas.biz',
        ],
      },
      {
        name: 'Incredible Wooden Bike - Reichert, Raynor and Kling, Inc',
        contributors: [
          'Dr. Collin Dickens',
          'Simone Kovacek',
          'Margaretta Rohan',
          'Terry Rice',
          'Frederick Fritsch',
        ],
        version: 8,
        apdex: 54,
        host: [
          '7e6272f7-098e.dakota.biz',
          'e0419f48-6a5a.craig.info',
          '95b346a0-17f4.abbigail.name',
        ],
      },
    ];
  }

  if (hostname === '9a450527-cdd9.kareem.info') {
  }

  if (hostname === 'e7bf58af-f0be.dallas.biz') {
  }

  if (hostname === 'e0419f48-6a5a.craig.info') {
  }

  if (hostname === 'b0b655c5-928a.nadia.biz') {
  }

  if (hostname === '95b346a0-17f4.abbigail.name') {
  }

  if (hostname === '128406fc-0d3f.tiana.biz') {
  }

  if (hostname === '2b4cfcf7-81d5.kelli.org') {
  }

  if (hostname === '92116865-5462.conor.com') {
  }

  if (hostname === '1d717554-bf17.sydnie.name') {
  }
}

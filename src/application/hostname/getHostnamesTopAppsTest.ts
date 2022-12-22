import hostApps from '../../../data/host-app-data.json';
import getAppsSliced from '../utils/getAppsSliced';
import AppType from '../../domain/app/AppType';
import getDeepCopyOfArrayOfObjects from '../utils/getDeepCopyOfArrayOfObjects';
import getHostnamesTopApps from './getHostnamesTopApps';
import HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT from '../../domain/hostname/HostnameTopAppsRangeMaxLimitValue';

describe('getHostnamesTopApps', () => {
  test('should return and empty array if there are not hostnames top apps', () => {
    const hostsTopApps = getHostnamesTopApps(
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      []
    );
    expect(hostsTopApps).toStrictEqual([]);
  });

  test('should return hostname range limit top apps', () => {
    const appsMock = getAppsSliced(
      0,
      80,
      getDeepCopyOfArrayOfObjects<AppType>(hostApps)
    );

    const hostsTopApps = getHostnamesTopApps(
      HOSTNAME_TOP_APPS_RANGE_MAX_LIMIT,
      appsMock
    );

    expect(hostsTopApps).toStrictEqual([
      {
        host: '7e6272f7-098e.dakota.biz',
        apps: [
          {
            name: 'Incredible Cotton Soap - Orn Group, Inc',
            apdex: 93,
          },
          {
            name: 'Small Frozen Computer - Glover - Rippin, and Sons',
            apdex: 75,
          },
          {
            name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
            apdex: 68,
          },
          {
            name: 'Unbranded Fresh Car - Schmidt, Gerhold and Roberts, and Sons',
            apdex: 68,
          },
          {
            name: 'Practical Metal Hat - Gulgowski, Raynor and Goodwin, Inc',
            apdex: 62,
          },
          {
            name: 'Rustic Metal Computer - Leffler and Sons, and Sons',
            apdex: 62,
          },
          {
            name: 'Awesome Rubber Pants - Wehner, McLaughlin and Runolfsdottir, and Sons',
            apdex: 62,
          },
          {
            name: 'Tasty Plastic Computer - Cummerata - Moen, Group',
            apdex: 61,
          },
          {
            name: 'Gorgeous Plastic Salad - Kovacek, Kautzer and Ratke, and Sons',
            apdex: 61,
          },
          {
            name: 'Awesome Cotton Pants - McGlynn, Heidenreich and Bernier, Group',
            apdex: 61,
          },
          {
            name: 'Intelligent Rubber Car - Marvin and Sons, Inc',
            apdex: 60,
          },
          {
            name: 'Unbranded Rubber Sausages - Bosco LLC, and Sons',
            apdex: 60,
          },
          {
            name: 'Sleek Rubber Mouse - McLaughlin - Monahan, and Sons',
            apdex: 59,
          },
          {
            name: 'Sleek Metal Soap - Kuhlman Inc, LLC',
            apdex: 59,
          },
          {
            name: 'Refined Rubber Chicken - Gleichner, Dickinson and Simonis, LLC',
            apdex: 58,
          },
          {
            name: 'Licensed Concrete Chair - Batz, Bergnaum and Herzog, and Sons',
            apdex: 58,
          },
          {
            name: 'Rustic Rubber Towels - Orn LLC, Inc',
            apdex: 58,
          },
          {
            name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
            apdex: 57,
          },
          {
            name: 'Handcrafted Metal Tuna - Rohan - Sipes, and Sons',
            apdex: 56,
          },
          {
            name: 'Small Concrete Chicken - Runte - Roberts, LLC',
            apdex: 55,
          },
          {
            name: 'Ergonomic Cotton Ball - Hirthe, Bashirian and Wisozk, Group',
            apdex: 55,
          },
          {
            name: 'Small Fresh Sausages - Wintheiser LLC, Inc',
            apdex: 55,
          },
          {
            name: 'Incredible Wooden Bike - Reichert, Raynor and Kling, Inc',
            apdex: 54,
          },
          {
            name: 'Gorgeous Metal Sausages - Mraz Inc, LLC',
            apdex: 54,
          },
        ],
      },
      {
        host: '9a450527-cdd9.kareem.info',
        apps: [
          {
            name: 'Small Concrete Bike - Bauch, Conn and Wolf, LLC',
            apdex: 83,
          },
          {
            name: 'Practical Concrete Hat - Fisher - Jaskolski, LLC',
            apdex: 81,
          },
          {
            name: 'Small Frozen Computer - Glover - Rippin, and Sons',
            apdex: 75,
          },
          {
            name: 'Tasty Steel Tuna - Bode Group, Inc',
            apdex: 71,
          },
          {
            name: 'Generic Metal Car - Reinger - Quitzon, Group',
            apdex: 70,
          },
          {
            name: 'Gorgeous Steel Ball - Kemmer - Vandervort, Inc',
            apdex: 70,
          },
          {
            name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
            apdex: 68,
          },
          {
            name: 'Intelligent Rubber Hat - Medhurst LLC, LLC',
            apdex: 67,
          },
          {
            name: 'Ergonomic Steel Tuna - Simonis - Wunsch, Inc',
            apdex: 65,
          },
          {
            name: 'Tasty Steel Towels - Hane LLC, Inc',
            apdex: 64,
          },
          {
            name: 'Rustic Cotton Hat - Ratke - Beahan, Inc',
            apdex: 64,
          },
          {
            name: 'Ergonomic Frozen Bike - Lueilwitz Inc, Inc',
            apdex: 64,
          },
          {
            name: "Handcrafted Frozen Shirt - O'Keefe - Sipes, Group",
            apdex: 64,
          },
          {
            name: 'Practical Metal Hat - Gulgowski, Raynor and Goodwin, Inc',
            apdex: 62,
          },
          {
            name: 'Unbranded Rubber Sausages - Bosco LLC, and Sons',
            apdex: 60,
          },
          {
            name: 'Sleek Metal Soap - Kuhlman Inc, LLC',
            apdex: 59,
          },
          {
            name: 'Rustic Rubber Towels - Orn LLC, Inc',
            apdex: 58,
          },
          {
            name: 'Unbranded Rubber Ball - Wintheiser, Moen and Schmidt, and Sons',
            apdex: 57,
          },
          {
            name: 'Tasty Plastic Chips - Orn - Hand, Group',
            apdex: 57,
          },
          {
            name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
            apdex: 56,
          },
          {
            name: 'Incredible Concrete Salad - Corwin, Murphy and Spencer, Group',
            apdex: 56,
          },
          {
            name: 'Unbranded Rubber Sausages - Hilll Group, Group',
            apdex: 55,
          },
          {
            name: 'Ergonomic Cotton Ball - Hirthe, Bashirian and Wisozk, Group',
            apdex: 55,
          },
          {
            name: 'Gorgeous Metal Sausages - Mraz Inc, LLC',
            apdex: 54,
          },
        ],
      },
      {
        host: 'e7bf58af-f0be.dallas.biz',
        apps: [
          {
            name: 'Small Concrete Bike - Bauch, Conn and Wolf, LLC',
            apdex: 83,
          },
          {
            name: 'Handmade Concrete Computer - Ortiz - Howe, Group',
            apdex: 82,
          },
          {
            name: 'Refined Metal Chair - Rutherford, Davis and Price, and Sons',
            apdex: 82,
          },
          {
            name: 'Practical Concrete Hat - Fisher - Jaskolski, LLC',
            apdex: 81,
          },
          {
            name: 'Practical Granite Salad - Hills LLC, Group',
            apdex: 75,
          },
          {
            name: 'Small Fresh Pants - Kautzer - Boyer, and Sons',
            apdex: 68,
          },
          {
            name: 'Small Frozen Pants - Swift, McLaughlin and West, LLC',
            apdex: 67,
          },
          {
            name: 'Small Plastic Cheese - Aufderhar Group, and Sons',
            apdex: 67,
          },
          {
            name: 'Tasty Steel Towels - Hane LLC, Inc',
            apdex: 64,
          },
          {
            name: 'Rustic Cotton Hat - Ratke - Beahan, Inc',
            apdex: 64,
          },
          {
            name: "Handcrafted Frozen Shirt - O'Keefe - Sipes, Group",
            apdex: 64,
          },
          {
            name: 'Practical Metal Hat - Gulgowski, Raynor and Goodwin, Inc',
            apdex: 62,
          },
          {
            name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
            apdex: 61,
          },
          {
            name: 'Sleek Granite Chair - Konopelski, Pfannerstill and Hintz, Inc',
            apdex: 61,
          },
          {
            name: 'Gorgeous Rubber Ball - Harvey - Lehner, Inc',
            apdex: 60,
          },
          {
            name: 'Sleek Frozen Salad - Friesen - Brown, Inc',
            apdex: 59,
          },
          {
            name: 'Unbranded Frozen Salad - Wilderman Group, Inc',
            apdex: 59,
          },
          {
            name: "Practical Plastic Bike - O'Connell - Morar, Group",
            apdex: 59,
          },
          {
            name: 'Generic Cotton Pants - Hahn Group, and Sons',
            apdex: 57,
          },
          {
            name: 'Practical Soft Car - King, Bernhard and Kuhic, Inc',
            apdex: 56,
          },
          {
            name: "Rustic Soft Sausages - Pagac, O'Keefe and Schaefer, LLC",
            apdex: 55,
          },
          {
            name: 'Ergonomic Fresh Hat - Cormier, Lemke and Jaskolski, LLC',
            apdex: 55,
          },
          {
            name: 'Small Fresh Sausages - Wintheiser LLC, Inc',
            apdex: 55,
          },
          {
            name: 'Tasty Granite Shirt - Green - Kohler, Group',
            apdex: 54,
          },
        ],
      },
      {
        host: 'e0419f48-6a5a.craig.info',
        apps: [
          {
            name: 'Incredible Cotton Soap - Orn Group, Inc',
            apdex: 93,
          },
          {
            name: 'Refined Metal Chair - Rutherford, Davis and Price, and Sons',
            apdex: 82,
          },
          {
            name: 'Fantastic Wooden Pizza - Glover, Okuneva and Pouros, LLC',
            apdex: 80,
          },
          {
            name: 'Generic Frozen Shirt - Fisher and Sons, Group',
            apdex: 69,
          },
          {
            name: 'Rustic Granite Fish - Morissette, Weimann and Bogisich, and Sons',
            apdex: 68,
          },
          {
            name: 'Unbranded Fresh Car - Schmidt, Gerhold and Roberts, and Sons',
            apdex: 68,
          },
          {
            name: 'Small Frozen Pants - Swift, McLaughlin and West, LLC',
            apdex: 67,
          },
          {
            name: 'Intelligent Rubber Hat - Medhurst LLC, LLC',
            apdex: 67,
          },
          {
            name: 'Tasty Steel Towels - Hane LLC, Inc',
            apdex: 64,
          },
          {
            name: 'Rustic Cotton Hat - Ratke - Beahan, Inc',
            apdex: 64,
          },
          {
            name: 'Practical Frozen Table - Waelchi, Morar and Gusikowski, and Sons',
            apdex: 64,
          },
          {
            name: 'Ergonomic Frozen Bike - Lueilwitz Inc, Inc',
            apdex: 64,
          },
          {
            name: 'Sleek Granite Chair - Konopelski, Pfannerstill and Hintz, Inc',
            apdex: 61,
          },
          {
            name: 'Intelligent Cotton Shoes - Paucek - Tromp, and Sons',
            apdex: 61,
          },
          {
            name: 'Sleek Rubber Mouse - McLaughlin - Monahan, and Sons',
            apdex: 59,
          },
          {
            name: 'Fantastic Fresh Fish - Funk, Barrows and Lindgren, and Sons',
            apdex: 58,
          },
          {
            name: 'Rustic Rubber Towels - Orn LLC, Inc',
            apdex: 58,
          },
          {
            name: 'Refined Concrete Shirt - Hudson - Sauer, Group',
            apdex: 57,
          },
          {
            name: 'Unbranded Rubber Ball - Wintheiser, Moen and Schmidt, and Sons',
            apdex: 57,
          },
          {
            name: 'Generic Cotton Pants - Hahn Group, and Sons',
            apdex: 57,
          },
          {
            name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
            apdex: 56,
          },
          {
            name: 'Ergonomic Fresh Salad - Balistreri LLC, Group',
            apdex: 56,
          },
          {
            name: 'Ergonomic Fresh Hat - Cormier, Lemke and Jaskolski, LLC',
            apdex: 55,
          },
          {
            name: 'Ergonomic Cotton Ball - Hirthe, Bashirian and Wisozk, Group',
            apdex: 55,
          },
          {
            name: 'Incredible Wooden Bike - Reichert, Raynor and Kling, Inc',
            apdex: 54,
          },
        ],
      },
      {
        host: 'b0b655c5-928a.nadia.biz',
        apps: [
          {
            name: 'Refined Metal Chair - Rutherford, Davis and Price, and Sons',
            apdex: 82,
          },
          {
            name: 'Handmade Concrete Table - Steuber LLC, LLC',
            apdex: 74,
          },
          {
            name: 'Generic Metal Car - Zboncak LLC, and Sons',
            apdex: 74,
          },
          {
            name: 'Practical Metal Gloves - Osinski and Sons, Group',
            apdex: 71,
          },
          {
            name: 'Generic Metal Car - Reinger - Quitzon, Group',
            apdex: 70,
          },
          {
            name: 'Gorgeous Steel Ball - Kemmer - Vandervort, Inc',
            apdex: 70,
          },
          {
            name: 'Rustic Granite Fish - Morissette, Weimann and Bogisich, and Sons',
            apdex: 68,
          },
          {
            name: 'Unbranded Fresh Car - Schmidt, Gerhold and Roberts, and Sons',
            apdex: 68,
          },
          {
            name: 'Small Plastic Cheese - Aufderhar Group, and Sons',
            apdex: 67,
          },
          {
            name: "Handcrafted Frozen Shirt - O'Keefe - Sipes, Group",
            apdex: 64,
          },
          {
            name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
            apdex: 61,
          },
          {
            name: 'Incredible Frozen Shirt - Padberg and Sons, Group',
            apdex: 61,
          },
          {
            name: 'Sleek Granite Chair - Konopelski, Pfannerstill and Hintz, Inc',
            apdex: 61,
          },
          {
            name: 'Intelligent Cotton Shoes - Paucek - Tromp, and Sons',
            apdex: 61,
          },
          {
            name: 'Generic Fresh Shirt - Ebert and Sons, Group',
            apdex: 61,
          },
          {
            name: 'Licensed Concrete Chair - Batz, Bergnaum and Herzog, and Sons',
            apdex: 58,
          },
          {
            name: 'Rustic Wooden Bike - Jacobi - Ferry, Group',
            apdex: 57,
          },
          {
            name: 'Handcrafted Metal Tuna - Rohan - Sipes, and Sons',
            apdex: 56,
          },
          {
            name: 'Practical Soft Car - King, Bernhard and Kuhic, Inc',
            apdex: 56,
          },
          {
            name: 'Ergonomic Fresh Hat - Cormier, Lemke and Jaskolski, LLC',
            apdex: 55,
          },
          {
            name: 'Small Concrete Chicken - Runte - Roberts, LLC',
            apdex: 55,
          },
          {
            name: 'Tasty Granite Shirt - Green - Kohler, Group',
            apdex: 54,
          },
        ],
      },
      {
        host: '95b346a0-17f4.abbigail.name',
        apps: [
          {
            name: 'Handmade Concrete Computer - Ortiz - Howe, Group',
            apdex: 82,
          },
          {
            name: 'Practical Concrete Hat - Fisher - Jaskolski, LLC',
            apdex: 81,
          },
          {
            name: 'Handmade Concrete Table - Steuber LLC, LLC',
            apdex: 74,
          },
          {
            name: 'Generic Metal Car - Zboncak LLC, and Sons',
            apdex: 74,
          },
          {
            name: 'Refined Steel Chips - Gottlieb and Sons, and Sons',
            apdex: 69,
          },
          {
            name: 'Unbranded Fresh Car - Schmidt, Gerhold and Roberts, and Sons',
            apdex: 68,
          },
          {
            name: 'Intelligent Rubber Hat - Medhurst LLC, LLC',
            apdex: 67,
          },
          {
            name: 'Ergonomic Steel Tuna - Simonis - Wunsch, Inc',
            apdex: 65,
          },
          {
            name: 'Rustic Cotton Hat - Ratke - Beahan, Inc',
            apdex: 64,
          },
          {
            name: 'Rustic Metal Computer - Leffler and Sons, and Sons',
            apdex: 62,
          },
          {
            name: 'Ergonomic Wooden Soap - Lemke and Sons, Inc',
            apdex: 61,
          },
          {
            name: 'Incredible Frozen Shirt - Padberg and Sons, Group',
            apdex: 61,
          },
          {
            name: 'Tasty Plastic Computer - Cummerata - Moen, Group',
            apdex: 61,
          },
          {
            name: 'Generic Fresh Shirt - Ebert and Sons, Group',
            apdex: 61,
          },
          {
            name: 'Gorgeous Plastic Salad - Kovacek, Kautzer and Ratke, and Sons',
            apdex: 61,
          },
          {
            name: 'Fantastic Cotton Pants - Daniel and Sons, Group',
            apdex: 59,
          },
          {
            name: 'Gorgeous Plastic Chips - Lynch - Keeling, Inc',
            apdex: 59,
          },
          {
            name: 'Fantastic Fresh Fish - Funk, Barrows and Lindgren, and Sons',
            apdex: 58,
          },
          {
            name: 'Generic Cotton Pants - Hahn Group, and Sons',
            apdex: 57,
          },
          {
            name: 'Handcrafted Metal Tuna - Rohan - Sipes, and Sons',
            apdex: 56,
          },
          {
            name: 'Incredible Concrete Salad - Corwin, Murphy and Spencer, Group',
            apdex: 56,
          },
          {
            name: 'Generic Steel Mouse - Howe and Sons, LLC',
            apdex: 56,
          },
          {
            name: "Rustic Soft Sausages - Pagac, O'Keefe and Schaefer, LLC",
            apdex: 55,
          },
          {
            name: 'Ergonomic Fresh Hat - Cormier, Lemke and Jaskolski, LLC',
            apdex: 55,
          },
          {
            name: 'Practical Metal Tuna - Smitham, Schaefer and Wuckert, Inc',
            apdex: 55,
          },
        ],
      },
      {
        host: '128406fc-0d3f.tiana.biz',
        apps: [
          {
            name: 'Handmade Concrete Computer - Ortiz - Howe, Group',
            apdex: 82,
          },
          {
            name: 'Fantastic Wooden Pizza - Glover, Okuneva and Pouros, LLC',
            apdex: 80,
          },
          {
            name: 'Small Frozen Computer - Glover - Rippin, and Sons',
            apdex: 75,
          },
          {
            name: 'Handmade Concrete Table - Steuber LLC, LLC',
            apdex: 74,
          },
          {
            name: 'Generic Metal Car - Zboncak LLC, and Sons',
            apdex: 74,
          },
          {
            name: 'Incredible Steel Salad - Schmeler, Ondricka and Keeling, Inc',
            apdex: 73,
          },
          {
            name: 'Generic Metal Car - Reinger - Quitzon, Group',
            apdex: 70,
          },
          {
            name: 'Refined Steel Chips - Gottlieb and Sons, and Sons',
            apdex: 69,
          },
          {
            name: 'Generic Frozen Shirt - Fisher and Sons, Group',
            apdex: 69,
          },
          {
            name: 'Rustic Granite Fish - Morissette, Weimann and Bogisich, and Sons',
            apdex: 68,
          },
          {
            name: 'Licensed Soft Pizza - Greenfelder, Aufderhar and Raynor, and Sons',
            apdex: 63,
          },
          {
            name: 'Rustic Metal Computer - Leffler and Sons, and Sons',
            apdex: 62,
          },
          {
            name: 'Sleek Granite Chair - Konopelski, Pfannerstill and Hintz, Inc',
            apdex: 61,
          },
          {
            name: 'Generic Fresh Shirt - Ebert and Sons, Group',
            apdex: 61,
          },
          {
            name: 'Gorgeous Plastic Salad - Kovacek, Kautzer and Ratke, and Sons',
            apdex: 61,
          },
          {
            name: 'Awesome Cotton Pants - McGlynn, Heidenreich and Bernier, Group',
            apdex: 61,
          },
          {
            name: 'Intelligent Rubber Car - Marvin and Sons, Inc',
            apdex: 60,
          },
          {
            name: 'Sleek Frozen Salad - Friesen - Brown, Inc',
            apdex: 59,
          },
          {
            name: 'Refined Rubber Chicken - Gleichner, Dickinson and Simonis, LLC',
            apdex: 58,
          },
          {
            name: 'Generic Cotton Pants - Hahn Group, and Sons',
            apdex: 57,
          },
          {
            name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
            apdex: 56,
          },
          {
            name: 'Ergonomic Fresh Salad - Balistreri LLC, Group',
            apdex: 56,
          },
          {
            name: 'Incredible Concrete Salad - Corwin, Murphy and Spencer, Group',
            apdex: 56,
          },
          {
            name: "Handcrafted Granite Tuna - O'Kon - Runolfsson, and Sons",
            apdex: 56,
          },
          {
            name: "Rustic Soft Sausages - Pagac, O'Keefe and Schaefer, LLC",
            apdex: 55,
          },
        ],
      },
      {
        host: '2b4cfcf7-81d5.kelli.org',
        apps: [
          {
            name: 'Small Concrete Bike - Bauch, Conn and Wolf, LLC',
            apdex: 83,
          },
          {
            name: 'Small Frozen Computer - Glover - Rippin, and Sons',
            apdex: 75,
          },
          {
            name: 'Handmade Concrete Table - Steuber LLC, LLC',
            apdex: 74,
          },
          {
            name: 'Practical Metal Gloves - Osinski and Sons, Group',
            apdex: 71,
          },
          {
            name: 'Small Steel Chicken - Grant, Olson and Larkin, Group',
            apdex: 68,
          },
          {
            name: 'Intelligent Rubber Hat - Medhurst LLC, LLC',
            apdex: 67,
          },
          {
            name: 'Handcrafted Plastic Cheese - Padberg - Quigley, and Sons',
            apdex: 64,
          },
          {
            name: 'Licensed Soft Pizza - Greenfelder, Aufderhar and Raynor, and Sons',
            apdex: 63,
          },
          {
            name: 'Awesome Rubber Pants - Wehner, McLaughlin and Runolfsdottir, and Sons',
            apdex: 62,
          },
          {
            name: 'Intelligent Cotton Shoes - Paucek - Tromp, and Sons',
            apdex: 61,
          },
          {
            name: 'Gorgeous Rubber Ball - Harvey - Lehner, Inc',
            apdex: 60,
          },
          {
            name: 'Unbranded Rubber Sausages - Bosco LLC, and Sons',
            apdex: 60,
          },
          {
            name: 'Handmade Steel Mouse - Wiegand, Armstrong and Kuphal, Inc',
            apdex: 60,
          },
          {
            name: "Practical Plastic Bike - O'Connell - Morar, Group",
            apdex: 59,
          },
          {
            name: 'Gorgeous Plastic Chips - Lynch - Keeling, Inc',
            apdex: 59,
          },
          {
            name: 'Sleek Metal Soap - Kuhlman Inc, LLC',
            apdex: 59,
          },
          {
            name: 'Rustic Rubber Towels - Orn LLC, Inc',
            apdex: 58,
          },
          {
            name: 'Ergonomic Concrete Fish - Williamson - Hodkiewicz, and Sons',
            apdex: 56,
          },
          {
            name: 'Tasty Granite Shirt - Green - Kohler, Group',
            apdex: 54,
          },
        ],
      },
      {
        host: '92116865-5462.conor.com',
        apps: [
          {
            name: 'Handmade Concrete Computer - Ortiz - Howe, Group',
            apdex: 82,
          },
          {
            name: 'Fantastic Wooden Pizza - Glover, Okuneva and Pouros, LLC',
            apdex: 80,
          },
          {
            name: 'Generic Metal Car - Zboncak LLC, and Sons',
            apdex: 74,
          },
          {
            name: 'Incredible Steel Salad - Schmeler, Ondricka and Keeling, Inc',
            apdex: 73,
          },
          {
            name: 'Generic Metal Car - Reinger - Quitzon, Group',
            apdex: 70,
          },
          {
            name: 'Generic Frozen Shirt - Fisher and Sons, Group',
            apdex: 69,
          },
          {
            name: 'Rustic Granite Fish - Morissette, Weimann and Bogisich, and Sons',
            apdex: 68,
          },
          {
            name: 'Unbranded Fresh Car - Schmidt, Gerhold and Roberts, and Sons',
            apdex: 68,
          },
          {
            name: 'Small Steel Chicken - Grant, Olson and Larkin, Group',
            apdex: 68,
          },
          {
            name: 'Small Frozen Pants - Swift, McLaughlin and West, LLC',
            apdex: 67,
          },
          {
            name: 'Ergonomic Steel Tuna - Simonis - Wunsch, Inc',
            apdex: 65,
          },
          {
            name: 'Tasty Plastic Computer - Cummerata - Moen, Group',
            apdex: 61,
          },
          {
            name: 'Generic Fresh Shirt - Ebert and Sons, Group',
            apdex: 61,
          },
          {
            name: 'Intelligent Rubber Car - Marvin and Sons, Inc',
            apdex: 60,
          },
          {
            name: 'Unbranded Frozen Salad - Wilderman Group, Inc',
            apdex: 59,
          },
          {
            name: "Practical Plastic Bike - O'Connell - Morar, Group",
            apdex: 59,
          },
          {
            name: 'Sleek Metal Soap - Kuhlman Inc, LLC',
            apdex: 59,
          },
          {
            name: 'Rustic Rubber Towels - Orn LLC, Inc',
            apdex: 58,
          },
          {
            name: 'Generic Cotton Pants - Hahn Group, and Sons',
            apdex: 57,
          },
          {
            name: 'Tasty Plastic Chips - Orn - Hand, Group',
            apdex: 57,
          },
          {
            name: 'Handcrafted Metal Tuna - Rohan - Sipes, and Sons',
            apdex: 56,
          },
          {
            name: 'Incredible Concrete Salad - Corwin, Murphy and Spencer, Group',
            apdex: 56,
          },
          {
            name: 'Practical Metal Tuna - Smitham, Schaefer and Wuckert, Inc',
            apdex: 55,
          },
        ],
      },
      {
        host: '1d717554-bf17.sydnie.name',
        apps: [
          {
            name: 'Handmade Concrete Computer - Ortiz - Howe, Group',
            apdex: 82,
          },
          {
            name: 'Small Frozen Computer - Glover - Rippin, and Sons',
            apdex: 75,
          },
          {
            name: 'Practical Granite Salad - Hills LLC, Group',
            apdex: 75,
          },
          {
            name: 'Tasty Steel Tuna - Bode Group, Inc',
            apdex: 71,
          },
          {
            name: 'Unbranded Fresh Car - Schmidt, Gerhold and Roberts, and Sons',
            apdex: 68,
          },
          {
            name: 'Small Frozen Pants - Swift, McLaughlin and West, LLC',
            apdex: 67,
          },
          {
            name: 'Intelligent Rubber Hat - Medhurst LLC, LLC',
            apdex: 67,
          },
          {
            name: 'Handcrafted Plastic Cheese - Padberg - Quigley, and Sons',
            apdex: 64,
          },
          {
            name: 'Practical Metal Hat - Gulgowski, Raynor and Goodwin, Inc',
            apdex: 62,
          },
          {
            name: 'Sleek Granite Chair - Konopelski, Pfannerstill and Hintz, Inc',
            apdex: 61,
          },
          {
            name: 'Gorgeous Plastic Salad - Kovacek, Kautzer and Ratke, and Sons',
            apdex: 61,
          },
          {
            name: 'Intelligent Rubber Car - Marvin and Sons, Inc',
            apdex: 60,
          },
          {
            name: 'Handmade Steel Mouse - Wiegand, Armstrong and Kuphal, Inc',
            apdex: 60,
          },
          {
            name: 'Sleek Frozen Salad - Friesen - Brown, Inc',
            apdex: 59,
          },
          {
            name: 'Fantastic Cotton Pants - Daniel and Sons, Group',
            apdex: 59,
          },
          {
            name: 'Gorgeous Plastic Chips - Lynch - Keeling, Inc',
            apdex: 59,
          },
          {
            name: 'Sleek Metal Soap - Kuhlman Inc, LLC',
            apdex: 59,
          },
          {
            name: 'Fantastic Fresh Fish - Funk, Barrows and Lindgren, and Sons',
            apdex: 58,
          },
          {
            name: 'Refined Rubber Chicken - Gleichner, Dickinson and Simonis, LLC',
            apdex: 58,
          },
          {
            name: 'Rustic Rubber Towels - Orn LLC, Inc',
            apdex: 58,
          },
          {
            name: 'Rustic Wooden Bike - Jacobi - Ferry, Group',
            apdex: 57,
          },
          {
            name: 'Tasty Plastic Chips - Orn - Hand, Group',
            apdex: 57,
          },
          {
            name: 'Practical Soft Car - King, Bernhard and Kuhic, Inc',
            apdex: 56,
          },
          {
            name: 'Generic Steel Mouse - Howe and Sons, LLC',
            apdex: 56,
          },
        ],
      },
    ]);
  });
});

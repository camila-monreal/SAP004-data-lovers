
import { filterData, sortData, computeStatus, computeStatusPorcentage } from '../src/data.js';

const data = [{
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
},
{
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/2.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/2",
    "created": "2017-11-04T18:50:21.651Z"
},
{
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female",
    "origin": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/3.jpeg",
    "episode": [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31"
    ],
    "url": "https://rickandmortyapi.com/api/character/3",
    "created": "2017-11-04T19:09:56.428Z"
  }
]

describe('filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns human characters', () => {
    expect(filterData(data,'human')).toMatchObject(data);
  });

  it('returns no alien characters', () => {
    expect(filterData(data,'alien')).toMatchObject([]);

  });

  it('returns no unknown characters', () => {
    expect(filterData(data,'unknown')).toMatchObject([]);
  });

  it('returns alive characters', () => {
    expect(filterData(data,'alive')).toMatchObject(data);
  });

  it('returns no dead characters', () => {
    expect(filterData(data,'dead')).toMatchObject([]);
  });

  it('returns no unknown-status characters', () => {
    expect(filterData(data,'unknown-status')).toMatchObject([]);
  });
  
  it('returns Summer character(Female)', () => {
    expect(filterData(data,'female')[0].name).toBe("Summer Smith");
  });

  it('returns Morty character(Male)', () => {
    expect(filterData(data,'male')[0].name).toBe("Rick Sanchez");
  });

  it('returns Rick character(Male)', () => {
    expect(filterData(data,'male')[1].name).toBe("Morty Smith");
  });

  it('returns no unknown-gender characters', () => {
    expect(filterData(data,'unknown-gender')).toMatchObject([]);
  });

  it('returns', () => {
    expect(filterData(data,'')).toMatchObject(data);
  });
});


describe('sortData', () => {
  it('is a function', () => {
    expect(typeof sortData).toBe('function');
  });

  it('returns ordered (z-a) characthers', () => {
    const sortResultZa = [data[2], data[0], data[1]];
    expect(sortData(data, "z-a")).toMatchObject(sortResultZa);
  });

  it('returns ordered (a-z) characthers', () => { 
    const sortResultAz= [data[1], data[0], data[2]];
    expect(sortData(data, "a-z")).toMatchObject(sortResultAz);
  });

  it('returns', () => {
    expect(sortData(data, "")).toBe(data);
  });
});
describe('computeStatus', () => {
  it('is a function', () => {
    expect(typeof computeStatus).toBe('function');
  });

  it('returns 3 human characters', () => {
    expect(computeStatus(data,'human')).toBe(3);
  });

  it('returns 0 count alien characters', () => {
    expect(computeStatus(data,'alien')).toBe(0);

  });

  it('returns 0 unknown characters', () => {
    expect(computeStatus(data,'unknown')).toBe(0);
  });

  it('returns 3 alive characters', () => {
    expect(computeStatus(data,'alive')).toBe(3);
  });

  it('returns 0 dead characters', () => {
    expect(computeStatus(data,'dead')).toBe(0);
  });

  it('returns 0 unknown-status characters', () => {
    expect(computeStatus(data,'unknown-status')).toBe(0);
  });
  
  it('returns 1 character female', () => {
    expect(computeStatus(data,'female')).toBe(1);
  });

  it('returns 2 characters male', () => {
    expect(computeStatus(data,'male')).toBe(2);
  });

  it('returns 0 unknown-gender characters', () => {
    expect(computeStatus(data,'unknown-gender')).toBe(0);
  });

  it('returns', () => {
    expect(computeStatus(data,'')).toBe("");
  });
});
describe('computeStatusPorcentage', () => {
  it('is a function', () => {
    expect(typeof computeStatusPorcentage).toBe('function');
  });
  
  it('returns 100% human characters', () => {
    expect(computeStatusPorcentage(data,'human')).toBe(100);
  });

  it('returns 0 count alien characters', () => {
    expect(computeStatusPorcentage(data,'alien')).toBe(0);

  });

  it('returns 0% unknown characters', () => {
    expect(computeStatusPorcentage(data,'unknown')).toBe(0);
  });

  it('returns 100% alive characters', () => {
    expect(computeStatusPorcentage(data,'alive')).toBe(100);
  });

  it('returns 0% dead characters', () => {
    expect(computeStatusPorcentage(data,'dead')).toBe(0);
  });

  it('returns 0% unknown-status characters', () => {
    expect(computeStatusPorcentage(data,'unknown-status')).toBe(0);
  });
  
  it('returns 33% character female', () => {
    expect(computeStatusPorcentage(data,'female')).toBe(33);
  });

  it('returns 67% characters male', () => {
    expect(computeStatusPorcentage(data,'male')).toBe(67);
  });

  it('returns 0% unknown-gender characters', () => {
    expect(computeStatusPorcentage(data,'unknown-gender')).toBe(0);
  });

  it('returns', () => {
    expect(computeStatusPorcentage(data,'')).toBe("");
  });
});
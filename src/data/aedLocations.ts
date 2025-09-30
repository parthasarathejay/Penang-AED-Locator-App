export interface AEDLocation {
  id: string;
  name: string;
  address: string;
  lat: number;
  lng: number;
  status: 'available24_7' | 'limitedHours' | 'outOfService';
  accessHours?: string;
  lastVerified: string;
  submittedBy?: string;
}
// Sample AED locations in Penang
export const aedLocations: AEDLocation[] = [{
  id: '1',
  name: 'Penang General Hospital',
  address: 'Jalan Residensi, 10990 George Town, Pulau Pinang',
  lat: 5.4164,
  lng: 100.3092,
  status: 'available24_7',
  lastVerified: '2023-10-15'
}, {
  id: '2',
  name: 'Queensbay Mall',
  address: 'Persiaran Bayan Indah, 11900 Bayan Lepas, Pulau Pinang',
  lat: 5.3352,
  lng: 100.3063,
  status: 'limitedHours',
  accessHours: '10:00 AM - 10:00 PM',
  lastVerified: '2023-09-22'
}, {
  id: '3',
  name: 'Penang International Airport',
  address: '11900 Bayan Lepas, Pulau Pinang',
  lat: 5.2971,
  lng: 100.2767,
  status: 'available24_7',
  lastVerified: '2023-11-05'
}, {
  id: '4',
  name: 'KOMTAR Tower',
  address: '1, Jalan Penang, 10000 George Town, Pulau Pinang',
  lat: 5.4147,
  lng: 100.3292,
  status: 'limitedHours',
  accessHours: '9:00 AM - 8:00 PM',
  lastVerified: '2023-10-30'
}, {
  id: '5',
  name: 'Gurney Plaza',
  address: 'Persiaran Gurney, 10250 George Town, Pulau Pinang',
  lat: 5.4382,
  lng: 100.3095,
  status: 'limitedHours',
  accessHours: '10:00 AM - 10:00 PM',
  lastVerified: '2023-11-10'
}, {
  id: '6',
  name: 'Penang City Park',
  address: 'Jalan Kebun Bunga, 10350 George Town, Pulau Pinang',
  lat: 5.4226,
  lng: 100.3023,
  status: 'outOfService',
  lastVerified: '2023-11-02'
}];
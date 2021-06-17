import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomProductPictureProviderService {
  getUrl() {
    let index:number = Math.round(Math.random() * this.urls.length);
    return this.urls[index]
  }

  urls: string[] = [
    "https://content2.onliner.by/catalog/device/header/4904e24d7e36e19818c954179881d5dc.jpeg",
    "https://content2.onliner.by/catalog/device/header/e5b4132327a5e987a243d8eda2d60f8c.jpeg",
    "https://content2.onliner.by/catalog/device/header/e38e6432bcb23386cbedd7e2ed53b716.jpeg",
    "https://content2.onliner.by/catalog/device/header/2d1567ee9cf89d0ec0b90e099ad06d80.jpeg",
    "https://content2.onliner.by/catalog/device/header/c35b4137833a97985e26ef9aaaa8b6e0.jpeg",
    "https://content2.onliner.by/catalog/device/header/e77d93eb858e1093cf424028a55ba279.jpeg",
    "https://content2.onliner.by/catalog/device/header/a21cd5fd61a4db4b19bb0f5127634f34.jpeg",
    "https://content2.onliner.by/catalog/device/header/d92281d51715ea45b3d02da028b592e5.jpg",
    "https://content2.onliner.by/catalog/device/header/ce270f2c05f8571659bcb945abdb9ca1.jpg",
    "https://content2.onliner.by/catalog/device/header/c279b01a650992fd7c4ce490a1826a27.jpeg",
    "https://content2.onliner.by/catalog/device/header/590fba1061ead59593c00a9c574d7436.jpeg",
    "https://content2.onliner.by/catalog/device/header/ad879a9c491b47ca3b886940f749eae6.jpeg",
    "https://content2.onliner.by/catalog/device/header/18ba5273939ad32780043144494ec650.png",
    "https://content2.onliner.by/catalog/device/header/9ae7c312cee7ccf9590bf12b11e514c7.jpeg",
    "https://content2.onliner.by/catalog/device/header/165385e2f95517d150b21355bc8a0026.jpeg",
    "https://content2.onliner.by/catalog/device/header/a6290ce133daeabe41039d732d11e1b2.jpg",
    "https://content2.onliner.by/catalog/device/header/20da011ae6fdef9f3bf2af53c4cde338.jpeg",
    "https://content2.onliner.by/catalog/device/header/ac84775c20567ca6df175a0b447c3bd4.jpeg",
    "https://content2.onliner.by/catalog/device/header/9dc0bc41a3da02b37c92142b383b5158.jpeg",
    "https://content2.onliner.by/catalog/device/header/6b2e413d78cc9e4beef1765d5a3211af.jpeg",
    "https://content2.onliner.by/catalog/device/header/f53b22e8a30793d76c4872d20decccee.jpeg",
    "https://content2.onliner.by/catalog/device/header/1bac701efe33199f863da845fb95dc9f.jpeg",
    "https://content2.onliner.by/catalog/device/header/cb814d517158589ab8abe9dc0fdb6ac0.jpeg",
    "https://content2.onliner.by/catalog/device/header/8f8b4ecf236e6f9e2cbee5f3e39dc702.jpeg",
    "https://content2.onliner.by/catalog/device/header/9a08e5f5400e508fb975bf697669c2b5.jpeg",
    "https://content2.onliner.by/catalog/device/header/f81d7ac523abe5530da64ebc9c7d855c.jpeg"
  ];
}

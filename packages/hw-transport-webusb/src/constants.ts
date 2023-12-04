export const USBConfigurationValue = 1;
export const USBInterfaceNumber = process.env.NODE_ENV === 'production' ? 0 : 1;
export const USBPackageSize = 64;
export const MAXUSBPackets = 200;
export const USBTimeout = 15000;
export const OFFSET_CLA = 0;
export const OFFSET_INS = 1;
export const OFFSET_P1 = 3;
export const OFFSET_P2 = 5;
export const OFFSET_LC = 7;
export const OFFSET_CDATA = 9;
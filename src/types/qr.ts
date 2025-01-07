export interface QRCodeData {
  type: 'link' | 'email' | 'text';
  content: {
    url?: string;
    email?: {
      address: string;
      subject: string;
      message: string;
    };
    text?: string;
  };
}

export interface QRStyle {
  backgroundColor: string;
  dotsColor: string;
  markerBorderColor: string;
  markerCenterColor: string;
  dotsStyle: 'squares' | 'circles' | 'triangles' | 'stars' | 'lines' | 'dots';
  markerStyle: 'square' | 'rounded' | 'star' | 'dotted-square';
  dotsSize: number;
  logo?: File | null;
}

export interface QRFrame {
  style: 'none' | 'bottom-text' | 'top-text' | 'bottom-rounded' | 'top-rounded' | 'custom-1' | 'custom-2';
  text?: string;
  backgroundColor?: string;
  textColor?: string;
  font?: string;
}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  category: 'Living Room' | 'Kitchen' | 'Workspace' | 'Bedroom';
  description: string;
  imageUrl: string;
  client: string;
  year: string;
  area: string;
  tags: string[];
}

export interface RoomStyle {
  id: 'japandi' | 'luxury' | 'industrial' | 'classic';
  name: string;
  description: string;
  imageUrl: string;
  furnitureDescription: string;
  mainMaterial: string;
  paletteColors: { name: string; hex: string }[];
}

export interface MaterialItem {
  id: string;
  name: string;
  category: 'wood' | 'stone' | 'metal' | 'fabric';
  imageUrl: string;
  description: string;
  colorHex: string;
}

export interface BudgetEstimate {
  designFee: number;
  buildFee: number;
  totalCost: number;
  durationWeeks: number;
}

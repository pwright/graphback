import { generate } from '../utils/generateHelper'

export const command = 'generate'

export const desc = 'Generate schema and resolvers'

export const builder = {}

export async function handler() {
  await generate()
}
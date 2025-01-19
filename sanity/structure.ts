import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structuom run devre-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())

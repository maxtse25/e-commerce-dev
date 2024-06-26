// This code snippests below is to manipulate the database

'use server'

import { db } from '@/db'
import { CaseColor, CaseFinish, CaseMaterial, PhoneModel } from '@prisma/client'

// Helper function for the function--SaveConfigArgs in DesignConfigurator.tsx
export type SaveConfigArgs = {
  color: CaseColor
  finish: CaseFinish
  material: CaseMaterial
  model: PhoneModel
  configId: string
}

// Function for saving clients' preferences
// Remote procedure call (RPC)
export async function saveConfig({
  color,
  finish,
  material,
  model,
  configId,
}: SaveConfigArgs) {
  await db.configuration.update({
    where: { id: configId },
    data: { color, finish, material, model },
  })
}
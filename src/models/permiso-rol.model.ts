import {Entity, model, property} from '@loopback/repository';

@model()
export class PermisoRol extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
  })
  id_rol?: number;

  @property({
    type: 'number',
  })
  id_permiso?: number;

  constructor(data?: Partial<PermisoRol>) {
    super(data);
  }
}

export interface PermisoRolRelations {
  // describe navigational properties here
}

export type PermisoRolWithRelations = PermisoRol & PermisoRolRelations;

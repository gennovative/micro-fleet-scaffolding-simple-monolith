import { decorators as d, Translatable } from '@micro-fleet/common'


export enum UserStatus { ACTIVE = 'active', LOCKED = 'locked', DELETED = 'deleted' }

export class User extends Translatable {

    @d.required()
    @d.id()
    public id: string = undefined // Must be initialized, otherwise TypeScript compiler will remove it

    @d.required()
    @d.string({ maxLength: 100 })
    public name: string = undefined

    @d.only(UserStatus.ACTIVE, UserStatus.LOCKED, UserStatus.DELETED)
    public status: UserStatus = undefined

}

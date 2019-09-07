// import { injectable, inject } from '@micro-fleet/common'
// import { Request, Response, IActionFilter, ActionFilterBase } from '@micro-fleet/web'

// import { Types as T } from '../constants/Types'
// import { ITenantLookupService } from '../interfaces/membership/ITenantLookupService'



// /**
//  * Provides method to look up tenant ID from tenant slug.
//  * TODO: This is supposed to be in package @micro-fleet/web, we just put it
//  * here temporarily for convenient development.
//  */
// @injectable()
// export class TenantResolverFilter
//     extends ActionFilterBase
//     implements IActionFilter {

//     constructor(
//             @inject(T.TENANT_LKUP_SVC) protected _tenantSvc: ITenantLookupService,
//         ) {
//             super()
//     }

//     public async execute(req: Request, res: Response, next: Function): Promise<void> {
//         const maybeId = await this._tenantSvc.getIdBySlug(req.params.tenant)

//         if (maybeId.isNothing) {
//             res.status(404).send('TENANT_NOT_FOUND')
//             return
//         }

//         this.addReadonlyProp(req.extras, 'tenantId', maybeId.value)
//         next()
//     }
// }

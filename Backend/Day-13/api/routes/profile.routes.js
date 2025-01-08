const {Router}=require('express')
const{Profile}=require("@/controllers")


const router=Router()
//router.get('/details',auth,Profile.ProfileCtrl.details)
router.get('/details',Profile.ProfileCtrl.details)

/*router.put('/update',Profile.ProfileCtrl.update)
router.patch('/update',Profile.ProfileCtrl.update)*/

router.route('/update')
    .put(Profile.ProfileCtrl.update)
    .patch(Profile.ProfileCtrl.update)

router.route('/password')
    .put(Profile.ProfileCtrl.password)
    .patch(Profile.ProfileCtrl.password)

module.exports=router
import * as OTPAuth from "otpauth"
import {TotpStore} from "../store/totp.ts";
import {reactive} from "vue";

export const useOtpInstance = (Totp: TotpStore) => {
  const topt = new OTPAuth.TOTP({
    ...Totp.data
  })

  const token = reactive({
    val: '',
    time: 0
  })

  function updateToken() {
    token.val = topt.generate()
    const actSeconds = (new Date).getSeconds()
    token.time = actSeconds > 30 ? 60 - actSeconds : 30 - actSeconds
    setTimeout(updateToken, 1000)
  }
  setTimeout(updateToken, 1000)

  return {
    topt,
    token
  }
}
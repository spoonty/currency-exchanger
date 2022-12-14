import ConnectionFactory from "@/helpers/WalletConnection/ConnectionFactory"
import { WalletType } from "@/helpers/WalletConnection/WalletType"

export default class WalletConnectionFacade {
    static async ConnectWallet(walletType: WalletType) {
        const connection = ConnectionFactory.GetWalletConnection(walletType)

        if (connection.status === -1) {
            return connection
        }

        await connection.description.getAccount()
    }
}
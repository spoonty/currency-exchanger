import ConnectionFactory from "@/helpers/WalletConnection/ConnectionFactory"
import { WalletType } from "@/helpers/WalletConnection/WalletType"
import { ethers } from "ethers"

export default class WalletDataFacade {
    static async GetWalletData(walletType: WalletType): Promise<object> {
        const connection = ConnectionFactory.GetWalletConnection(walletType)
        const signer = connection.getSigner()
        const address = await signer.getAddress()
        const balance = await connection.getBalance(address)
        const network = await connection.getNetwork()

        return {
            network: network.name,
            address,
            balance: ethers.utils.formatEther(balance)
        }
    }
}
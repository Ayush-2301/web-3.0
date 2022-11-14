import React,{ useEffect,useState } from 'react';
import {ethers} from 'ethers';
import { contractAbi,contractAddress } from '../utils/constant';

export const TransactionContext = React.createContext();
const {ethereum} = window;
const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const TransactionContract = new ethers.Contract(contractAddress,contractAbi,signer);
    // console.log({provider,signer,TransactionContract});
}
export const TransactionProvider = ({children})=>{

    const[currnetAccount , setCurrentAccount] =useState(''); 
    const[formData,setFormdata]=useState({addressTo:'',amount:'',keyword:'', message:''});
    const [isloading,setIsLoading]=useState(false);
    const [transactionCount,setTransactionCount] = useState(localStorage.getItem('transactionCount'))
    const handleChange = (e, name) =>{
    setFormdata((prevState)=>({ ...prevState,[name]:e.target.value}));
    }
   
    const checkIfWalletisConnected = async ()=>{
        try {
            if(!ethereum) return alert("wallet is not connected");
            const accounts=  await ethereum.request({ method: 'eth_accounts' });
            console.log(accounts);
            if(accounts.length){
                setCurrentAccount(accounts[0]);
            }
            else{
                console.log("NO accounts found");
            }
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object found");
        }
    }
    const connectWallet = async ()=>{
        try {
            if(!ethereum) return alert("wallet is not connected");
            const accounts = await ethereum.request({method : 'eth_requestAccounts'})
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object found");
        }
    }
    const sendTransaction = async ()=>{
    try {
        if(!ethereum) return alert("wallet is not connected");
        const {addressTo,amount,keyword,message}=formData;    
        const transactionContract= getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);
        await ethereum.request({
        method:'eth_sendTransaction',
        params:[{
            from: currnetAccount,
            to:addressTo,
            gas:'0x5208',
            value:parsedAmount._hex,
        }]
      })
      const transactionHash = await transactionContract.transferTransaction(addressTo,parsedAmount,message,keyword);
      setIsLoading(true);
      console.log(`transaction processing ${transactionHash.hash}`);
      await transactionHash.wait();
      setIsLoading(false);
      console.log(`success ${transactionHash.hash}`);
      const transactionCount =  await transactionContract.getTransactionCount();
    } 
    catch (error) {
        console.log(error);
        throw new Error("No ethereum object found");   
    }
    }
    useEffect(() => {
    checkIfWalletisConnected();},[]);

    return(
        <TransactionContext.Provider value={{ connectWallet,currnetAccount,formData,setFormdata , handleChange,sendTransaction,isloading }}>
        {children}
        </TransactionContext.Provider>
        )
}
import React,{ useEffect,useState } from 'react';
import {ethers} from 'ethers';
import { contractAbi,contractAddress } from '../utils/constant';

export const TransactionContext = React.createContext();
const {ethereum} = window;
const getEthereumContract = ()=>{
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress,contractAbi,signer);
    return transactionsContract;
    // console.log({provider,signer,TransactionContract});
};
export const TransactionProvider = ({children})=>{

    const[currentAccount , setCurrentAccount] =useState(''); 
    const[formData,setFormdata]=useState({addressTo:'',amount:'',keyword:"", message:""});
    const [isLoading,setIsLoading]=useState(false);
    const [transactionCount,setTransactionCount] = useState(localStorage.getItem('transactionCount'))
    const [transactions,setTransaction]=useState([]);

    const handleChange = (e, name) =>{
    setFormdata((prevState)=>({ ...prevState,[name]:e.target.value}));
    }
    const getAllTransaction = async()=>{
        try {
             if(ethereum){
            const transactionsContract= getEthereumContract();
             const availableTransaction = await transactionsContract.getTransaction();
             const structuredTransactions =availableTransaction.map((transaction)=>({
            addressTo:transaction.receiver,
            addressFrom: transaction.sender,
            timestamp: new Date(transaction.timestamp.toNumber()*1000).toLocaleString(),
            message: transaction.message,
            keyword: transaction.keyword,
            amount:parseInt(transaction.amount._hex)/(10 ** 18)
                }));
             console.log(structuredTransactions);
             setTransaction(structuredTransactions);
             }
             else{
                console.log("ethereum is not preesent");
             }
             
        } catch (error) {
            console.log(error);
            
        }
    }
   
    const checkIfWalletisConnected = async ()=>{
        try {
            if(!ethereum) return alert("wallet is not connected");
            const accounts=  await ethereum.request({ method: 'eth_accounts' });
            // console.log(accounts);
            if(accounts.length){
                setCurrentAccount(accounts[0]);
                getAllTransaction();
            }
            else{
                console.log("NO accounts found");
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    const checkifTransactionExist= async()=>{
        try {
             if(ethereum){
                 const transactionsContract= getEthereumContract();
                 const currentTransactionCount =  await transactionsContract.getTransactionCount();
                 window.localStorage.setItem("transactionCount",currentTransactionCount)
                }
        } catch (error) {
             console.log(error);
            throw new Error("No ethereum object found");
            
        }

    }
    const connectWallet = async ()=>{
        try {
            if(!ethereum) return alert("wallet is not connected");
            const accounts = await ethereum.request({method : 'eth_requestAccounts',})
            setCurrentAccount(accounts[0]);
            window.location.reload();
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object found");
        }
    };

    const sendTransaction = async ()=>{
    try {
        if(ethereum){
        const {addressTo,amount,keyword,message}=formData;    
        const transactionsContract= getEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);
        await ethereum.request({
        method:'eth_sendTransaction',
        params:[{
            from: currentAccount,
            to:addressTo,
            gas:'0x5208',
            value:parsedAmount._hex,
        }],
      });
      const transactionHash = await transactionsContract.transferTransaction(addressTo,parsedAmount,message,keyword);
      setIsLoading(true);
      console.log(`transaction processing ${transactionHash.hash}`);
      await transactionHash.wait();
      console.log(`success ${transactionHash.hash}`);
      setIsLoading(false);
      const transactionCounts =  await transactionsContract.getTransactionCount();
      setTransactionCount(transactionCounts.toNumber())
      window.location.reload();
    }
    else{
        console.log("No etherum object");
    }
    } 
    catch (error) {
        console.log(error);
        throw new Error("No ethereum object found");   
    }
    }
    useEffect(() => {
    checkIfWalletisConnected();
    checkifTransactionExist()},[transactionCount]);


    return(
        <TransactionContext.Provider value={{ transactionCount,transactions, connectWallet,currentAccount,formData, handleChange,sendTransaction,isLoading }}>
        {children}
        </TransactionContext.Provider>
        )
}
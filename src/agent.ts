import { 
  BlockEvent, 
  Finding, 
  HandleBlock, 
  FindingSeverity, 
  FindingType,
  getJsonRpcUrl
} from 'forta-agent'

import Web3 from "web3"

const web3 = new Web3(getJsonRpcUrl())
const handleBlock: HandleBlock = async (blockEvent: BlockEvent) => {
  const findings: Finding[] = [];
  let size = parseInt(blockEvent.block.size,16)
  if (size < 8000){
    
      findings.push(
        Finding.fromObject({
          name: "LOW_BLOCK_SIZE",
          description: `Block size less then 8000 bytes`,
          alertId: "FORTA-700",
          severity: FindingSeverity.High,
          type: FindingType.Suspicious,
          metadata:{
            hash:blockEvent.blockHash
          }
  
        })
       )
  }

  
 
  
  return findings;
}

export default {
  handleBlock
}
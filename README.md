# SecureFlow (PayFi)

SecureFlow is a decentralized PayFi escrow protocol for milestone-based payments, deployed on HashKey Chain.

## Overview
- **Network**: HashKey Chain Testnet (Chain ID: 133)
- **Contract**: `0x2b8Cb611f8EADcfBbfDa69e4d481A597e7b9dF9a`
- **Features**: PayFi Escrow, Milestone Management, Multi-Arbiter Dispute Resolution
- **Tokens Supported**: HSK (Native), USDT, USDC, MockERC20 (MTK)

## Quick Start
1. Clone and install dependencies: `npm install && cd frontend && npm install`
2. Configure `.env` and `frontend/.env.local`
3. Run dev server: `npm run dev`

## Contract Deployment
`npx hardhat run scripts/deploy.js --network hashkeyTestnet`

## License
MIT

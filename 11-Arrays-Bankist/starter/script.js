'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//movements of transaction
const updateMovements = (movementsArary) => {
  containerMovements.innerHTML = '';
  movementsArary.forEach((val, idx) => {
    console.log(movementsArary,"array inside function");
    let type = val >= 0 ? 'deposit' : 'withdrawal';

    let movementEle = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">
          ${idx + 1} ${type} </div>
          <div class="movements__value">${val}€</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', movementEle);
  });
};

//calculate total balance and prit it
const calculateBalance = arr => {
  return arr.reduce((acc, val) => {
    return acc + val;
  }, 0);
};

//calculate income summary

const calculateSummary = (arr,it) => {
  
  const incoming = arr
    .filter(income => {
      return income > 0;
    })
    .reduce((acc, val) => {
      return acc + val;
    }, 0);

  

  labelSumIn.textContent = incoming;

  const outgoing = arr
    .filter(income => {
      return income < 0;
    })
    .reduce((acc, val) => {
      return acc + val;
    }, 0);

  labelSumOut.textContent = Math.abs(outgoing);

  const interest = arr
    .filter(val => {
      return val > 0;
    })
    .map(i => {
      return (i * it ) / 100;
    })
    .filter(iin => {
      return iin >= 1;
    })
    .reduce((acc, val) => {
      return acc + val;
    }, 0);

  labelSumInterest.textContent = `${interest} %`;
};

let currentLoggedInUser;
btnLogin.addEventListener('click', e => {
  e.preventDefault();

  accounts.find(account => {
    if (
      account.username === inputLoginUsername.value &&
      account.pin === Number(inputLoginPin?.value)
    ) {
      currentLoggedInUser = account.username;
      inputLoginUsername.value = '';
      inputLoginPin.value = '';
      labelWelcome.textContent = `Welcome,${account.owner.split(' ')[0]}`;
      containerApp.style.opacity = 100;

      updateMovements(account.movements);

      const totalBalance = calculateBalance(account.movements);
      labelBalance.textContent = `${totalBalance}€`;

      calculateSummary(account.movements,account.interestRate);
    }
  });

  btnTransfer.addEventListener("click",(e)=>{
    e.preventDefault();

    accounts.find((account)=>{
      if(account.username === inputTransferTo.value){
        const amount = Number(inputTransferAmount.value);
        accounts.find((currentUser)=>{
          if(currentUser.username === currentLoggedInUser){
            currentUser.movements.push(amount * -1);
            updateMovements(currentUser.movements);
            const totalBalance = calculateBalance(currentUser.movements);
            labelBalance.textContent = `${totalBalance}€`;
    
            calculateSummary(currentUser.movements,account.interestRate);
            console.log(currentUser.movements);
          }
        })
        account.movements.push(amount);
        updateMovements(account.movements);
        const totalBalance = calculateBalance(account.movements);
        labelBalance.textContent = `${totalBalance}€`;

        calculateSummary(account.movements,account.interestRate);


      }
    })
    
  })
});

//compute usernames
const computeUserName = accounts => {
  accounts.forEach(usr => {
    usr.username = usr.owner
      .toLowerCase()
      .split(' ')
      .map(u => {
        return u[0];
      })
      .join('');
  });
};

const userNames = computeUserName(accounts);
console.log(accounts);

//design logging flow

const userName = inputLoginUsername.value;
const userPin = inputLoginPin.value;

btnLogin.addEventListener('click', e => {
  e.preventDefault();
  if (
    (userName == account1.userName && userPin == account1.pin) ||
    (userName == account2.userName && userPin == account2.pin) ||
    (userName == account3.userName && userPin == account3.pin)
  ) {
    containerApp.style.opacity = 100;
  }
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach((val, key) => {
//   console.log(`Key is ${key} and value is ${val}`);
// });

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements
//   .filter(amount => {
//     return amount > 0;
//   })
//   .reduce((acc, val) => {
//     return acc + val;
//   }, 0);
// console.log(deposits);

/////////////////////////////////////////////////

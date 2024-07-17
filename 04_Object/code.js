const wizard = {
    name: 'Merlin',
    health: 50,
    heal(num1, num2) {
      return this.health += num1 + num2;
    }
}
  
const archer = {
    name: 'Robin Hood',
    health: 30
}
  
console.log(wizard.heal.call(archer, 50, 30));
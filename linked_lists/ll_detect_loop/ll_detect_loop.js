function hasLoop() {
  let counter1 = this.head;
  let counter2 = this.head;

  while (counter2.next.next) {

    counter1 = counter1.next;
    counter2 = counter2.next.next;

    if(counter1 === counter2) {
      return true;
      break;
    }
  return false;
  }
}



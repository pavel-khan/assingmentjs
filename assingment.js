// ১. একটা ফাংশন তৈরি করতে হবে যেখানে আমি যদি কোন ইন্টিজার নাম্বার আর্গুমেন্ট হিসেবে পাস করি সেটা আমাকে ইঞ্চি থেকে ফিট এ কনভার্ট করে দিবে। এবার ইঞ্চি থেকে ফিট এ কনভার্ট করার ফাংশনটাকে আমরা আরেক ফাংশনের আর্গুমেন্ট হিসেবে পাস করবো এবং আমাদের কাজ হবে ফিট থেকে মাইলে কনভার্ট করা। এজন্য আরেকটা ফাংশন তৈরি করতে হবে এবং এখান থেকে আউটপুট আমাদের মাইলে কনভার্ট করে দেখাবে।

let value = 4000;

function inchToFt(a) {
  return a / 12;
}

function ftToMile(b) {
  return b / 5280;
}

console.log(ftToMile(inchToFt(value)));

// ২. একজন লোক কয়েকটা চেয়ার, টেবিল এবং খাট বানাবে। এজন্য সে এখন কাঠের দোকানে গেছে কাঠ কিনতে। কিন্তু সে জানেনা আসলে তাকে কয়টা কাঠ কিনতে হবে। এখন তোমার কাজ হবে একটা উড ক্যালকুলেটর বানানো (অবশ্যই ফাংশন ইউজ করে বানাতে হবে) যাতে করে লোকটির সমস্যার সমাধান হয়ে যায়। এখানে একটু খেয়াল করার বিষয় এটা যে, একটা চেয়ার বানাতে এক কিউবিক ফিট কাঠ লাগে, একটা টেবিল বানাতে তিন কিউবিক ফিট কাঠ লাগে এবং একটা খাট বানাতে পাঁচ কিউবিক ফিট কাঠ লাগে। লোকটির ৫টা চেয়ার, ২টা টেবিল এবং ১টা খাট লাগবে। তাহলে তার কাঠুরের দোকান থেকে কত কিউবিক ফিট কাঠ কিনতে হবে?

let numOfChair = 5;
let numOfTable = 2;
let numOfBed = 1;

function woodCalculator(a = 0, b = 0, c = 0) {
  const woodNeed = [a, b * 3, c * 5];
  return woodNeed[0] + woodNeed[1] + woodNeed[2];
}

totalWoodNeeded = woodCalculator(numOfChair, numOfTable, numOfBed)

console.log(`the man need to buy ${totalWoodNeeded} cubic ft wood from wood-seller`);


// ৩. করিম সাহেব বিল্ডিং বানাবে কিন্তু সে এখনও জানেনা তার ২২ তলা বিল্ডিং এর জন্য কত সংখ্যক ইট লাগবে। তোমার কাজ হবে একটা ব্রিক ক্যাল্কুলেটর বানানো (একটা ফাংশনের মধ্যেই প্রয়োজনীয় সব কাজ করে ফেলতে হবে) যাতে করে করিম সাহেব সহজেই ইটের হিসাব-নিকাশ সারতে পারে। এখন ১-১০তলা পর্যন্ত বিল্ডিং প্রতি তলা ১৫ ফুট উঁচু হয়, ১০তলার পর থেকে ২০তলা পর্যন্ত উচ্চতা ১২ ফুট হয় এবং এরপরের থেকে বাকি সব তলা ১০ ফুট উঁচু হয়। প্রতি ফুট উচ্চতার জন্য যদি ১০০০টা ইট লাগে তাহলে করিম সাহেবের ২২তলা বিল্ডিঙের জন্য কতটি ইট প্রয়োজন?


function brickCalculator(totalFloor) {
  const ftRatePerFloor = [15, 12, 10];
  const ftPerFloor = [0, 150, 120, 10];
  if (totalFloor <= 10) {
    let totalft = ftPerFloor[0] + totalFloor * ftRatePerFloor[0];
    totalNumBrick = totalft * 1000;
    return totalNumBrick;
  } else if (totalFloor <= 20) {
    let totalft = ftPerFloor[0] + ftPerFloor[1] + (totalFloor - 10) * ftRatePerFloor[1];
    totalNumBrick = totalft * 1000;
    return totalNumBrick;
  } else {
    let totalft = ftPerFloor[0] + ftPerFloor[1] + ftPerFloor[2] + (totalFloor - 20) * ftRatePerFloor[2];
    totalNumBrick = totalft * 1000;
    return totalNumBrick;
  }
}

console.log(brickCalculator(22));

// ৪. তোমার সবগুলো ফ্রেন্ডের নাম দিয়ে একটা অ্যারে তৈরি করো। এখন একটা ফাংশন বানাতে হবে যেই ফাংশনের কাজ হবে তোমার ফ্রেন্ডের নামগুলোর মধ্য থেকে যার নাম সবথেকে ছোট, তাকে আউটপুট হিসেবে দেখানো। (বুঝতেই পারছো এখানে ফাংশনের আরগুমেন্ট হিসেবে আমাদের একটা অ্যারে পাস করতে হবে বাকি সব ক্যাল্কুলেশন ফাংশনের ভিতরেই হবে)


// let friends = ["Jolly", "Molly", "shoriful", "mahady", "mkidul", "afif"];


// for (let i = 0; i < friends.length; i++) {
//   const elements = friends[i].length;
//   console.log(elements);


// }




//৫. বাইরে প্রচন্ড বৃষ্টি। আপনি এখন চিন্তা করছেন অফিসে যাবেন নাকি যাবেন না। যদি অফিসে যান, তাহলে ছাতা নিয়ে বের হবেন আর যদি অফিসে নাহ্ যান তাহলে অফিসে একটা মেইল করে দিবেন যে আপনার শরীর খারাপ। এখন যদি অফিসে না জান, তাহলে বাসায় খিচুড়ি রান্না করবেন। বাসায় যদি গরুর মাংস থেকে তাহলে একটু গরুর মাংসও রান্না করে নিবেন খিচুড়ির সাথে নাহলে ডিম ভাজি দিয়ে খেয়ে ফেলবেন। এখন এই পুরো সিনারিও চিন্তা করে একটা জাভাস্ক্রিপ্ট প্রোগ্রাম লিখে ফেলেন।



let OfficeeJabo = false;

if (OfficeeJabo != true) {
  console.log("Ami sick ekta mail pathay dibo");


  let gorurMagsoAche = false;
  let khicuriRannaKorbo = true;

  if (khicuriRannaKorbo == true && gorurMagsoAche == true) {
    console.log("gorur magser khicuri khabo");
  } else {
    console.log("Dim vaji kore khicuri ranna korbo");
  }

} else {
  console.log("Office e chata niye jabo");
}
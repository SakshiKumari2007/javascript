class Calculation{
    int add(int a){
        return a;
    }

    int add(int a, int b){
        return a+b;
    }

    int add(int a, int b, int c){
        return a+b+c;
    }
}

class Overloading{
    public static void main(String args[]){
        Calculation obj = new Calculation();
        System.out.println(obj.add(5));
        System.out.println(obj.add(5,10));
        System.out.println(obj.add(5,10,15));
    }
}
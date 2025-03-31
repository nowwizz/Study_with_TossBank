//연습문제 - 싱글톤 만들기
//클래스 이름 : HanaAccount
//  필드(private) : 계좌번호(1234), 고객이름(홍길동), 잔액(1000), 이자율(년3%)
//  메소드 : 입금(+100), 출금(-100), 이자계산(1년후 잔액), 잔액조회
class TossAccount {
    private int accountNum = 1234;
    private String name = "홍길동";
    private double balance = 1000;
    private double percent = 0.03;
    void plus() {
        balance += 100;
    }
    void minus() {
        balance -= 100;
    }
    void calculate() {
        balance += balance * percent;
    }
    double confirm() {
        return balance;
    }
    private static TossAccount singleton;
    static TossAccount getInstance() {
        if (singleton == null) {
            singleton = new TossAccount();
        }
        return singleton;
    }
}


public class ex26 {
    public static void main(String[] args) {
        //싱글톤을 호출후
        TossAccount ta = TossAccount.getInstance();
        //1. 입금 메소드 호출
        ta.plus();
        System.out.println(ta.confirm());
        //2. 출금 메소드 호출
        ta.minus();
        System.out.println(ta.confirm());
        //3. 이자계산은 이자율을 읽어서 참조한다.
        //   이자계산후 잔액 증가한다.
        ta.calculate();
        //4. 최종 잔액을 출력한다.
        System.out.println(ta.confirm());
    }
}
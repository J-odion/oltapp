import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screen/home";
import DetailsScreen from "./screen/details";
import DashboardScreen from "./screen/dashboard";
import SuccessScreen from "./screen/success";
import LoginScreen from "./screen/login";
import CreatePinScreen from "./screen/createPin";
import ConfirmPin from "./screen/confirmPin";
import VerifyNumber from "./screen/verifynumber";
import Register from "./screen/register";
import ForgotPassword from "./screen/forgotPassword";
import EnterPin from "./screen/enterPin";
import PasswordChanged from "./screen/passwordChanged";
import NewPassword from "./screen/createnewpassword";
import Receipt from "./screen/reciept";
import EnterAmount from "./screen/enteramount";
import FundWallet from "./screen/fundwallet";
import EnterCardDetails from "./screen/entercarddetails";
import FundingSummary from "./screen/fundingsummary";
import MobileTopUp from "./screen/mobiletopup";
import selectrecipient from "./screen/selectrecipient";
import RechargeSummary from "./screen/rechargesummary";
import Cable from "./screen/cableTvs/cable";
import CableTv from "./screen/cableTvs/cabletv's";
import CableReview from "./screen/cableTvs/cablereview";
import Settings from "./screen/settings";
import Profile from "./screen/profile";
import Setting from "./screen/singlesettings";
import GetHelp from "./screen/gethelp";
import CallUs from "./screen/callus";
import EmailUs from "./screen/email";
import Whatsapp from "./screen/whatsapp";
import LiveChat from "./screen/livechat";
import TransactionOTP from "./screen/transactionotp";
import NewTransactionPin from "./screen/newtransactionpin";
import PinSuc from "./screen/transactionpinsuccess";
import ChangedPass from "./screen/changepassword";
import ChangePassword from "./screen/newpassword";
import Results from "./screen/results/results";
import ResultPin from "./screen/results/resultpin";
import PinSlip from "./screen/results/pinslip";
import ResultReciept from "./screen/results/reciept";
import Data from "./screen/data/data";
import DataReciept from "./screen/data/datareciept";
import DataReview from "./screen/data/datareview";
import DataPin from "./screen/data/datapin";
import DataSuccess from "./screen/data/datasuccess";
import ElectricityPin from "./screen/electricity/electricitypin";
import Electricity from "./screen/electricity/electricity";
import ElectricityReciept from "./screen/electricity/electricityreciept";
import ElectricityReview from "./screen/electricity/electricityreview";
import ElectricitySuccess from "./screen/electricity/electricitysuccess";
import Service from "./screen/service";
import Transaction from "./screen/transaction";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Create" component={CreatePinScreen} />
        <Stack.Screen name="Confirm" component={ConfirmPin} />
        <Stack.Screen name="Verify" component={VerifyNumber} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={ForgotPassword} />
        <Stack.Screen name="EnterPin" component={EnterPin} />
        <Stack.Screen name="PasswordChanged" component={PasswordChanged} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="Receipt" component={Receipt} />
        <Stack.Screen name="FundWallet" component={FundWallet} />
        <Stack.Screen name="EnterAmount" component={EnterAmount} />
        <Stack.Screen name="CardDetails" component={EnterCardDetails} />
        <Stack.Screen name="FundingSummary" component={FundingSummary} />
        <Stack.Screen name="MobileTopUp" component={MobileTopUp} />
        <Stack.Screen name="SelectRecipient" component={selectrecipient} />
        <Stack.Screen name="RechargeSummary" component={RechargeSummary} />
        <Stack.Screen name="Cable" component={CableTv} />
        <Stack.Screen name="CableReview" component={CableReview} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="Service" component={Service} />
        <Stack.Screen name="Transaction" component={Transaction} />
        {/* Help and support pages */}
        <Stack.Screen name="GetHelp" component={GetHelp} />
        <Stack.Screen name="Callus" component={CallUs} />
        <Stack.Screen name="EmailUs" component={EmailUs} />
        <Stack.Screen name="Whatsapp" component={Whatsapp} />
        <Stack.Screen name="LiveChat" component={LiveChat} />
        {/* Settings setting page */}
        <Stack.Screen name="TransactionOTP" component={TransactionOTP} />
        <Stack.Screen name="NewTransactionPin" component={NewTransactionPin} />
        <Stack.Screen name="PinSuc" component={PinSuc} />
        <Stack.Screen name="ChangedPass" component={ChangedPass} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        {/* Result Top pages */}
        <Stack.Screen name="Result" component={Results} />
        <Stack.Screen name="ResultPin" component={ResultPin} />
        <Stack.Screen name="PinSlip" component={PinSlip} />
        <Stack.Screen name="ResultReciept" component={ResultReciept} />
        {/* Data top up pages */}
        <Stack.Screen name="Data" component={Data} />
        <Stack.Screen name="DataReview" component={DataReview} />
        <Stack.Screen name="DataReciept" component={DataReciept} />
        <Stack.Screen name="DataPin" component={DataPin} />
        <Stack.Screen name="DataSuccess" component={DataSuccess} />

        {/* Electricity pages */}
        <Stack.Screen name="Electricity" component={Electricity} />
        <Stack.Screen name="ElectricityPin" component={ElectricityPin} />
        <Stack.Screen
          name="ElectricityReciept"
          component={ElectricityReciept}
        />
        <Stack.Screen name="ElectricityReview" component={ElectricityReview} />
        <Stack.Screen
          name="ElectricitySuccess"
          component={ElectricitySuccess}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import { Accordion } from "@chakra-ui/react"
import React from "react"
import CustomCard from "../../CustomCard"
import FaqItem from "../../FaqItem"

const FAQBlock = () => {
  return (
    <CustomCard title={"FAQ"}>
      <Accordion>
        <FaqItem
          title={
            "Can I register several devices and get cryptocurrency on Bitcoin Bonus?"
          }
          body={
            "On our service you can register no more than 5 devices from one account. You can track statistics from each device in your account."
          }
        />
        <FaqItem
          title={"I can’t enter my personal account, what to do?"}
          body={
            "If your device was early registered on Bitcoin Bonus, then the entrance to your personal account will be available for you, even if you do not remember the data for the entrance. This was done thanks to modern IP memorization systems."
          }
        />
        <FaqItem
          title={
            "My telephone mined cryptocurrency without my actions related to your service. Why does it show me that my phone was mined all this time, can I get this money?"
          }
          body={
            "At the moment, such cases have become more frequent. This may be due to fraudulent actions and hacking of mobile phones using viral programs. With this method, attackers lure data about your phone and register it on Bitcoin Bonus.  faced with this problem in 2021, we developed a system of IP memorization and re -registration. That is, if your phone was used by attackers to extract cryptocurrency without your consent, you can automatically rewrite the IP devices on your service and withdraw the money to the service from this phone. And the attackers will forever lose all the data from your device, and ahead of which they will no longer be able to go to your personal account"
          }
        />
        <FaqItem
          title={
            "How can I exchange the extracted bitcoins for my currency and withdraw the money earned?"
          }
          body={
            "Our service collaborates with the official Binance cryptocurrency exchange service. Bitcoin and other currencies can be viewed in your personal account. For the convenience of withdrawing funds to your card/wallet, we made it possible to withdraw funds directly on our website. To do this, just contact the manager, they will help you withdraw funds within 10 minutes."
          }
        />
      </Accordion>
    </CustomCard>
  )
}

export default FAQBlock

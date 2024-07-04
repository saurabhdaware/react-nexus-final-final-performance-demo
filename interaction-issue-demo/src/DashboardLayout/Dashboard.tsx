import React from "react";

import {
  Box,
  Menu,
  MenuItem,
  MenuOverlay,
  Badge,
  Link as BladeLink,
  ArrowRightIcon,
  Link,
  Button,
} from "@razorpay/blade/components";
import {
  CustomMenuItem,
  MenuTrigger,
  navMenuItems,
} from "./CustomMenu";
import { RazorpayLogo } from "../assets/RazorpayLogo";

const blockMainThreadPlease = (n: number): number => {
  if (n <= 1) return n;
  return blockMainThreadPlease(n - 1) + blockMainThreadPlease(n - 2);
}

const LandingNav = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const args = {
    openInteraction: "hover",
  } as const;

  const openMenu = () => {
    blockMainThreadPlease(40)
    setIsOpen(true);
  }

  return (
    <Box
      paddingX="spacing.4"
      display="flex"
      flexDirection="column"
    >
      <Box display="flex">
        <Menu isOpen={isOpen}>
          <MenuTrigger onMouseOver={() => openMenu()} onMouseOut={() => setIsOpen(false)}>Payments</MenuTrigger>
          <MenuOverlay>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              gap="spacing.3"
            >
              {navMenuItems.payments.map((product) => (
                <CustomMenuItem key={product.name} {...product} />
              ))}
            </Box>
            <BladeLink
              icon={ArrowRightIcon}
              iconPosition="right"
              size="large"
              marginY="spacing.3"
              marginX="spacing.4"
              href="https://razorpay.com/"
            >
              View All Products
            </BladeLink>
          </MenuOverlay>
        </Menu>

        <Menu {...args}>
          <MenuTrigger>Banking+</MenuTrigger>
          <MenuOverlay>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2, 1fr)"
              gap="spacing.3"
            >
              {navMenuItems.banking.map((product) => (
                <CustomMenuItem key={product.name} {...product} />
              ))}
            </Box>
            <BladeLink
              icon={ArrowRightIcon}
              iconPosition="right"
              size="large"
              marginY="spacing.3"
              marginX="spacing.4"
              href="https://razorpay.com/x/"
            >
              View All Products
            </BladeLink>
          </MenuOverlay>
        </Menu>

        <Menu {...args}>
          <MenuTrigger>Payroll</MenuTrigger>
          <MenuOverlay>
            <MenuItem title="For SMEs" href="/payroll" />
            <MenuItem
              title="For Enterprises"
              href="/payroll/enterprises"
              titleSuffix={
                <Badge color="positive" size="small">
                  NEW
                </Badge>
              }
            />
          </MenuOverlay>
        </Menu>

        <Menu {...args}>
          <MenuTrigger>Partners</MenuTrigger>
          <MenuOverlay>
            <MenuItem title="For SMEs" href="/payroll" />
            <MenuItem
              title="For Enterprises"
              href="/payroll/enterprises"
              titleSuffix={
                <Badge color="positive" size="small">
                  NEW
                </Badge>
              }
            />
          </MenuOverlay>
        </Menu>
      </Box>
      </Box>
  )
}

const DashboardSkeleton = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement => {


  return (
    <>
    <Box display="flex" justifyContent="space-between"  maxWidth="1000px" margin="auto">
      <Box display="flex" paddingTop="spacing.8">
        <Box marginTop="8px" marginRight="spacing.6"><RazorpayLogo /></Box>
        <LandingNav />
      </Box>
      <Box marginTop="28px" display="flex" gap="spacing.6" alignItems="center">
        <Link>Login</Link>
        <Button>Sign Up</Button>
      </Box>
    </Box>
    <Box
      position="relative"
      borderRadius="large"
      overflow="hidden"
      paddingTop="spacing.4"
      flex="1"
      backgroundColor="surface.background.gray.intense"
    >
      {children}
    </Box>
    </>
  );
};

export const Dashboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardSkeleton>
      <Box overflow="auto">
        <Box paddingTop="spacing.6">
          {children}
        </Box>
      </Box>
    </DashboardSkeleton>
  );
};

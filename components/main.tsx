"use client";

import { useMediaQuery } from "@/hooks";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/dialog";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import { useTranslate } from "@/app/TranslationProvider";

const Main = ({ children }: { children: React.ReactNode }) => {
  const { getTranslation } = useTranslate();
  const [showWarning, setShowWarning] = useState(false);
  const isHugeScreen = useMediaQuery(1400);
  const isLargeScreen = useMediaQuery(1150);
  const isMediumScreen = useMediaQuery(600);

  useEffect(() => {
    setShowWarning(
      (localStorage.getItem("hasSeenWarning") || false) !== "true"
    );
  }, []);

  return (
    <div>
      <main
        className={
          isHugeScreen
            ? "pt-[160px]"
            : isLargeScreen
            ? "pt-[190px]"
            : isMediumScreen
            ? "pt-[100px]"
            : "pt-[140px]"
        }
      >
        {children}
        <Dialog open={showWarning}>
          <DialogContent
            className="!w-3/4 !max-w-[800px] rounded-xl"
            hideCloseButton
          >
            <DialogHeader className="flex flex-col gap-5 items-start">
              <DialogTitle className="text-base md:text-3xl text-start font-montserrat font-bold text-primary">
                Website Disclaimer and Scam & Fraud Warning
              </DialogTitle>
              <DialogDescription className="max-h-[400px] overflow-y-auto text-sm text-start font-normal font-segoe slim-scrollbar">
                The information provided By PT. Sari Kreasi Boga Tbk on our
                website is for general information purposes only. All
                information on the website is provided in a good faith, and we
                make no representation or warranty of any kind, express or
                implied, regarding the accuracy, adequacy, validity, timeliness,
                reliability, availability, or completeness of any information on
                the website.
                <br />
                <br />
                The Website may contain links to other websites of content
                belonging to or originating from third parties, which are not
                investigated, monitored, or checked for accuracy, adequacy,
                validity, timeliness, reliability, availability, or completeness
                by us. We do not warrant, guarantee, or assume responsibility
                for the accuracy or reliability of such information.
                <br />
                <br />
                Further, we hereby inform you to be cautious of any offers of
                cooperation, seminar invitations or requests for donations,
                funding or goods as well as request for personal information in
                the name of PT. Sari Kreasi Boga Tbk., its subsidiaries or
                associated via any methods, including email, telephone or
                through our website.
                <br />
                <br />
                We never request for donations, funds transfer or deposit, or
                delivery of goods in any circumstances, including during
                cooperation or procurement process. Please be cautious of any
                communication containing such requests and verify its legitimacy
                before responding.
                <br />
                <br />
                PT Sari Kreasi Boga Tbk., its subsidiaries and associated
                entities are not responsible for any damages or losses incurred
                as a result of the use of the Website or reliance on any
                information provided on the Website, and any damages or losses
                arising from any spam or fraud.
                <br />
                <br />
                By using this Website, you acknowledge and agree to these terms
                and understand that you should independently verify any
                information or communication before relying on it or responding
                to it and seeking professional advice when necessary.
              </DialogDescription>
            </DialogHeader>
            <Button
              onClick={() => {
                localStorage.setItem("hasSeenWarning", "true");
                setShowWarning(false);
              }}
            >
              {getTranslation("common_understand")}
            </Button>
          </DialogContent>
        </Dialog>
      </main>
    </div>
  );
};

export default Main;

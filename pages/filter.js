import React from "react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const filter = ({ pattern, setActivefilter }) => {
 
    const TabClick = (cond) => {
        setActivefilter(cond);
      };
    if(pattern === "On sale")
    return (
        <>
        <div>
            <a onClick={TabClick("Buy now")} className="mr-6 text-pink-500">
                Buy now
            </a>
            <a onClick={TabClick("Auctions")} className="mr-6 text-pink-500">
                Auctions
            </a>
            <a onClick={TabClick("Bids")} className="mr-6 text-pink-500">
                Bids
            </a>
            <a onClick={TabClick("Ended")} className="mr-6 text-pink-500">
                Ended
            </a>
        </div>
        <div>
            <DropdownMenu.Root>

                <DropdownMenu.Trigger>
                <div className="mr-6 text-pink-500">
                    All Networks
                </div>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>

                <DropdownMenu.Item>
                    a
                </DropdownMenu.Item>

                <DropdownMenu.Item>b</DropdownMenu.Item>

                <DropdownMenu.Item>c</DropdownMenu.Item>

                </DropdownMenu.Content>

            </DropdownMenu.Root> 
            <DropdownMenu.Root>

                <DropdownMenu.Trigger>
                <div className="mr-6 text-pink-500">
                    Newest
                </div>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>

                <DropdownMenu.Item>
                    a1
                </DropdownMenu.Item>

                <DropdownMenu.Item>b1</DropdownMenu.Item>

                <DropdownMenu.Item>c1</DropdownMenu.Item>

                </DropdownMenu.Content>

            </DropdownMenu.Root> 
        </div>
        </>
    );
    if(pattern === "Items")
    return (
        <>
        <div>
            <a onClick={TabClick("In wallet")} className="mr-6 text-pink-500">
                In wallet
            </a>
            <a onClick={TabClick("Favorites")} className="mr-6 text-pink-500">
                Favorites
            </a>
        </div>
        <div>
            <DropdownMenu.Root>

                <DropdownMenu.Trigger>
                <div className="mr-6 text-pink-500">
                    All
                </div>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>

                <DropdownMenu.Item>
                    All
                </DropdownMenu.Item>

                <DropdownMenu.Item>On Sale</DropdownMenu.Item>

                <DropdownMenu.Item>Not On Sale</DropdownMenu.Item>

                </DropdownMenu.Content>

            </DropdownMenu.Root> 
            <DropdownMenu.Root>

                <DropdownMenu.Trigger>
                <div className="mr-6 text-pink-500">
                    Newest
                </div>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>

                <DropdownMenu.Item>
                    Newest
                </DropdownMenu.Item>

                <DropdownMenu.Item>Token ID:</DropdownMenu.Item>

                <DropdownMenu.Item>''''''</DropdownMenu.Item>

                </DropdownMenu.Content>

            </DropdownMenu.Root> 
        </div>
        </>
    );
    if(pattern === "Offers")
    return (
        <>
        <div>
            <a onClick={TabClick("Offered")} className="mr-6 text-pink-500">
                Offered
            </a>
            <a onClick={TabClick("Received")} className="mr-6 text-pink-500">
                Received
            </a>
        </div>
        <div>
            <DropdownMenu.Root>

                <DropdownMenu.Trigger>
                <div className="mr-6 text-pink-500">
                    All Networks
                </div>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>

                <DropdownMenu.Item>
                    a
                </DropdownMenu.Item>

                <DropdownMenu.Item>b</DropdownMenu.Item>

                <DropdownMenu.Item>c</DropdownMenu.Item>

                </DropdownMenu.Content>

            </DropdownMenu.Root> 
            <DropdownMenu.Root>

                <DropdownMenu.Trigger>
                <div className="mr-6 text-pink-500">
                    Recently Made
                </div>
                </DropdownMenu.Trigger>

                <DropdownMenu.Content>

                <DropdownMenu.Item>
                    Recently Made
                </DropdownMenu.Item>

                <DropdownMenu.Item>Recently Accepted</DropdownMenu.Item>

                </DropdownMenu.Content>

            </DropdownMenu.Root> 
        </div>
        </>
    );
};
export default filter;
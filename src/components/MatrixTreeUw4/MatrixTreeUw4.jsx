import React, { useEffect, useState } from "react";
import "../../style/matrix.css";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "../Config";
import { FaLongArrowAltDown } from "react-icons/fa";
import { TbBinaryTree2 } from "react-icons/tb";

const MatrixTree = () => {
  const [blocks, setBlocks] = useState([]);
  const [slot, setSlot] = useState(1);
  const [reEntry, setReEntry] = useState("");
  const { address } = useAccount();
  const [accessAdress, setAccessAddress] = useState("");
  const { dashboardData } = useSelector((state) => state.bitgold);
  const { userId } = dashboardData;

  useEffect(() => {
    const res = new URLSearchParams(window.location.search);
    // https://usdtocean.io/api/uwn2?user=0x13eF67AF092A521370A97FCC5cc26fBB109DDEbc&slot=1
    if (res.has("accessAddress")) {
      const ref = res.get("accessAddress");
      console.log(ref, "redddddfffff");
      setAccessAddress(ref);
    }
  }, [window.location.search]);

  const add = address ? address : accessAdress;
  const [lastBlock, setLastBlock] = useState("");

  const fetchBlockData = async (address, slot) => {
    try {
      const response = await axios.get(apiUrl + "/uwn4", {
        params: {
          user: address,
          slot: slot,
        },
      });

      if (response.data && response.data.mergedRecords) {
        const OriginalData = response.data.mergedRecords.map(
          (item) => item.userId
        );
        console.log(response.data.reenty, "rentry");
        setReEntry(response?.data?.reenty ?? "");
        const blockData = [...OriginalData].reverse();
        console.log("Block Data:", blockData);
        setLastBlock(response.data.mergedRecords.at(-1)?.place ?? "");
        console.log("Last Block:", lastBlock);

        return blockData;
      } else {
        console.error("Invalid response structure");
        return [];
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  console.log(lastBlock, "Last Block");

  useEffect(() => {
    if (address) {
      const getBlocks = async () => {
        const blockData = await fetchBlockData(add, slot);
        setBlocks(blockData);
      };

      getBlocks();
    }
  }, [address, add, slot]);
  console.log(blocks, "block");

  return (
    <>
      <div className="main-content app-content">
        <div className="container-fluid">
          <div style={{ marginTop: "90px" }} className="dash-head-div">
            <div className="d-flex align-items-center justify-content-between page-header-breadcrumb flex-wrap gap-2 mt-3">
              <div>
                <nav>
                  <ol className="breadcrumb mb-1">
                    <li className="breadcrumb-item">
                      <a href="#"> Page </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Matrix
                    </li>
                  </ol>
                </nav>
                <h1 className="page-title fw-medium fs-18 mb-0 text-light">
                  How Does Usdtocean Uwn4 Matrix Work
                </h1>
              </div>
            </div>
          </div>
          <div className="verticals twelve">
            <section className="management-tree card custom-card school-card">
              
              <div className="btn-group align-self-end mb-3">
                <button
                  type="button"
                  className="btn btn-success-ghost btn-wave"
                >
                  {`Re-Entry #${reEntry ?? "0"}`}
                </button>
              </div>

              <div className="btn-group align-self-end mb-3">
                <button
                  type=""
                  className="btn btn-primary-gradient btn-packages "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  See Packages
                </button>
                <ul className="dropdown-menu drop-ul">
                  <div className="overflow-div">
                    <li
                      className="w-100"
                      onClick={() => setSlot(1)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "10px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">
                          Community Member
                        </span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(2)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Biginner</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(3)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Seeker</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(4)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Engager</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(5)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Motivator</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(6)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Explorer</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(7)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Soldier</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(8)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Promoter</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(9)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Advisor</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(10)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Director</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(11)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Achiever</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(12)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Creator</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(13)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Mentor</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(14)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Expert</span>
                      </Link>
                    </li>

                    <li
                      className="w-100"
                      onClick={() => setSlot(15)}
                      style={{
                        paddingBottom: "20px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">Master</span>
                      </Link>
                    </li>
                    <li
                      className="w-100"
                      onClick={() => setSlot(16)}
                      style={{
                        paddingBottom: "35px",
                        paddingTop: "20px",
                        height: "14%",
                      }}
                    >
                      <Link to="/MatrixTreeUw4" className="side-menu__item">
                        <span className="side-menu__label">
                          Community Legend
                        </span>
                      </Link>
                    </li>
                  </div>
                </ul>
              </div>

              <div className="mgt-container">
                <div className="mgt-wrapper">
                  <div className="mgt-item">
                    <div className="mgt-item-parent">
                      <div className="person">
                        <div className="person-profile"></div>
                        <p className="name">{userId ? userId : "N/A"}<br/><strong className="text-primary">$12</strong></p>
                      </div>
                    </div>

                    <div className="mgt-item-children">
                      <div className="mgt-item-child">
                        <div className="mgt-item">
                          <div className="mgt-item-parent">
                            <div className="person">
                              <div className="person-profile"></div>
                              <p className="name">20%<br/><strong className="text-primary">$12</strong></p>
                            </div>
                          </div>

                          <div className="mgt-item-children">
                            <div className="mgt-item-child">
                              <div className="mgt-item">
                                <div className="mgt-item-parent">
                                  <div className="person">
                                    <div className="person-profile"></div>
                                    <p className="name">30%</p>
                                  </div>
                                </div>

                                <div className="mgt-item-children">
                                  <div className="mgt-item-child">
                                    <div className="mgt-item">
                                      <div className="mgt-item-parent">
                                        <div className="person">
                                          <div className="person-profile"></div>
                                          <p className="name">20%</p>
                                        </div>
                                      </div>

                                      {/* <div className="mgt-item-children">
                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>

                                  <div className="mgt-item-child">
                                    <div className="mgt-item">
                                      <div className="mgt-item-parent">
                                        <div className="person">
                                          <div className="person-profile"></div>
                                          <p className="name">20%</p>
                                        </div>
                                      </div>

                                      {/* <div className="mgt-item-children">
                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="mgt-item">
                                <div className="mgt-item-parent">
                                  <div className="person">
                                    <div className="person-profile"></div>
                                    <p className="name">30%</p>
                                  </div>
                                </div>

                                <div className="mgt-item-children">
                                  <div className="mgt-item-child">
                                    <div className="mgt-item">
                                      <div className="mgt-item-parent">
                                        <div className="person">
                                          <div className="person-profile"></div>
                                          <p className="name">20%</p>
                                        </div>
                                      </div>

                                      {/* <div className="mgt-item-children">
                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>

                                  <div className="mgt-item-child">
                                    <div className="mgt-item">
                                      <div className="mgt-item-parent">
                                        <div className="person">
                                          <div className="person-profile"></div>
                                          <p className="name">20%</p>
                                        </div>
                                      </div>

                                      {/* <div className="mgt-item-children">
                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mgt-item-child">
                        <div className="mgt-item">
                          <div className="mgt-item-parent">
                            <div className="person">
                              <div className="person-profile"></div>
                              <p className="name">20%</p>
                            </div>
                          </div>

                          <div className="mgt-item-children">
                            <div className="mgt-item-child">
                              <div className="mgt-item">
                                <div className="mgt-item-parent">
                                  <div className="person">
                                    <div className="person-profile"></div>
                                    <p className="name">30%</p>
                                  </div>
                                </div>

                                <div className="mgt-item-children">
                                  <div className="mgt-item-child">
                                    <div className="mgt-item">
                                      <div className="mgt-item-parent">
                                        <div className="person">
                                          <div className="person-profile"></div>
                                          <p className="name">20%</p>
                                        </div>
                                      </div>

                                      {/* <div className="mgt-item-children">
                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>

                                  <div className="mgt-item-child">
                                    <div className="mgt-item">
                                      <div className="mgt-item-parent">
                                        <div className="person">
                                          <div className="person-profile"></div>
                                          <p className="name">20%</p>
                                        </div>
                                      </div>

                                      {/* <div className="mgt-item-children">
                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mgt-item-child">
                              <div className="mgt-item">
                                <div className="mgt-item-parent">
                                  <div className="person">
                                    <div className="person-profile"></div>
                                    <p className="name">30%</p>
                                  </div>
                                </div>

                                <div className="mgt-item-children">
                                  <div className="mgt-item-child">
                                    <div className="mgt-item">
                                      <div className="mgt-item-parent">
                                        <div className="person">
                                          <div className="person-profile"></div>
                                          <p className="name">20%</p>
                                        </div>
                                      </div>

                                      {/* <div className="mgt-item-children">
                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>

                                  <div className="mgt-item-child">
                                    <div className="mgt-item">
                                      <div className="mgt-item-parent">
                                        <div className="person">
                                          <div className="person-profile"></div>
                                          <p className="name">20%</p>
                                        </div>
                                      </div>

                                      {/* <div className="mgt-item-children">
                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="mgt-item-child">
                                          <div className="mgt-item">
                                            <div className="mgt-item-parent">
                                              <div className="person">
                                                <div className="person-profile"></div>
                                                <p className="name">30%</p>
                                              </div>
                                            </div>

                                            <div className="mgt-item-children">
                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>

                                              <div className="mgt-item-child">
                                                <div className="person">
                                                  <div className="person-profile"></div>
                                                  <p className="name">50%</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="horizontal">
                <div class="verticals twelve text-center">
                  <h1 style={{ color: "#676767" }}>
                    Upto 16 Levels <TbBinaryTree2  />
                  </h1>
                </div>
              </div>
            </section>
          </div>

          {/* <div className="verticals twelve">
            <p style="font-style: italic; color: #2196f3; font-size: 18px; text-align: center; margin-top: 0px; margin-bottom: 20px;">
              Follow me on Twitter:{" "}
              <a href="https://twitter.com/mrdogra007/" target="_blank">
                @mrdogra007
              </a>
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default MatrixTree;
